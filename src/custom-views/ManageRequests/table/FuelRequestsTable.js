import {forwardRef, Fragment, useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {
    Card, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader,
    Row
} from 'reactstrap'
import {fuelRequestsTableHandler} from "./tableHandler"
import {EMPLOYEE_MOCK_DB, FUEL_REQUESTS_DB} from "../../../DB/DB"
import axios from "../../../axios/axios"
import moment from "moment"

const BootstrapCheckbox = forwardRef((props, ref) => (
    <div className='form-check'>
        <Input type='checkbox' ref={ref} {...props} />
    </div>
))

const onChangeHandle = (userdata) => {
    console.log(userdata)
}

const FuelRequestsTable = () => {
    // ** States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue] = useState('')
    const [goodOpen, setGoodOpen] = useState(false)
    const [requests, setRequests] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [selectedRequest, setSelectedRequest] = useState()

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    const onRowClicked = (e) => {
        setGoodOpen(!goodOpen)
        setSelectedRequest(e)
    }

    const fetchRequests = async () => {

        return axios.get("/fuel-request").then(res => {
            setRequests(res.data)
        })
    }

    useEffect(() => {
        fetchRequests()
    }, [])

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? Math.ceil(requests.length / 10) : Math.ceil(requests.length / 10) || 1}
            breakLabel='...'
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName='active'
            pageClassName='page-item'
            breakClassName='page-item'
            nextLinkClassName='page-link'
            pageLinkClassName='page-link'
            breakLinkClassName='page-link'
            previousLinkClassName='page-link'
            nextClassName='page-item next-item'
            previousClassName='page-item prev-item'
            containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
        />
    )

    return (
        <Fragment>
            <Card>
                <Row className='justify-content-end mx-0'>
                </Row>
                <div className='react-dataTable'>
                    <DataTable
                        pagination
                        columns={fuelRequestsTableHandler()}
                        paginationPerPage={10}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10}/>}
                        paginationDefaultPage={currentPage + 1}
                        paginationComponent={CustomPagination}
                        data={requests}
                        onSelectedRowsChange={onChangeHandle}
                        onRowClicked={onRowClicked}
                    />
                </div>
            </Card>

            <Modal size="lg"
                   className='modal-dialog-centered' isOpen={goodOpen} toggle={() => setGoodOpen(!goodOpen)} backdrop={3}>
                <ModalHeader toggle={() => setGoodOpen(!goodOpen)}>
                    <h1 className='m-0 p-0 f-Staatliches'>Manage Fuel Requests</h1>
                </ModalHeader>
                <ModalBody className='pt-2 pb-3'>
                    <div>
                        <h4>Station: Moratuwa</h4>
                    </div>
                    <div className='mt-1'>
                        <h4>Customer: Gathsara Umesh</h4>
                    </div>
                    <div className='mt-1'>
                        <h4>Fuel Type: Petrol</h4>
                    </div>
                    <div className='mt-1'>
                        <h4>Request Date: {moment(selectedRequest?.request_date_time).format("YYYY/MM/DD")}</h4>
                    </div>

                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            <button className='btn btn-gradient-warning'>CHECK VALIDITY</button>
                        </div>
                        <div className='d-flex gap-1'>
                            <button className='btn btn-gradient-primary'>APPROVE</button>
                            <button className='btn btn-gradient-danger'>REJECT</button>
                        </div>
                    </div>

                    <hr />

                    <div className='mt-2'>
                        <h1 className='m-0 mb-2 p-0 f-Staatliches'>Change request date</h1>
                        <Row>
                            <Col lg={4}>
                                <Label className='text-small'>Change Date to:</Label>
                                <Input type='date'/>
                            </Col>
                        </Row>
                    </div>
                </ModalBody>
                <ModalFooter className='d-flex justify-content-end'>
                    <button className='btn btn-gradient-primary'>UPDATE</button>
                </ModalFooter>
            </Modal>

        </Fragment>
    )
}

export default FuelRequestsTable

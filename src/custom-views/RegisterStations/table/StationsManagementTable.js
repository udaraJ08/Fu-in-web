import {forwardRef, Fragment, useState} from 'react'
import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {
    Card, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader,
    Row
} from 'reactstrap'
import {stationTableHandler} from "./tableHandler"
import {EMPLOYEE_MOCK_DB, STATION_DB} from "../../../DB/DB"

const BootstrapCheckbox = forwardRef((props, ref) => (
    <div className='form-check'>
        <Input type='checkbox' ref={ref} {...props} />
    </div>
))

const onChangeHandle = (userdata) => {
    console.log(userdata)
}

const StationsManagementTable = () => {
    // ** States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue] = useState('')
    // const [filteredData] = useState([])
    const [goodOpen, setGoodOpen] = useState(false)
    // const employees = useSelector(selectEmployees)

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    const onRowClicked = () => {
        setGoodOpen(!goodOpen)
    }

    // useEffect(() => {
    //     if (employees) {
    //         const temp = employees.map(item => {
    //             if (item.status === 'active') {
    //                 return item
    //             }
    //         })
    //         setFilteredEmployees(temp)
    //     }
    // }, [employees])

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? Math.ceil(STATION_DB.length / 10) : Math.ceil(STATION_DB.length / 10) || 1}
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
                        columns={stationTableHandler()}
                        paginationPerPage={10}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10}/>}
                        paginationDefaultPage={currentPage + 1}
                        paginationComponent={CustomPagination}
                        data={STATION_DB}
                        onSelectedRowsChange={onChangeHandle}
                        onRowClicked={onRowClicked}
                    />
                </div>
            </Card>
            <Modal size="lg"
                   className='modal-dialog-centered' isOpen={goodOpen} toggle={() => setGoodOpen(!goodOpen)} backdrop={3}>
                <ModalHeader toggle={() => setGoodOpen(!goodOpen)}>
                    <h1 className='m-0 p-0 f-Staatliches'>Manage Station fuel stocks</h1>
                </ModalHeader>
                <ModalBody className='pt-2 pb-3'>
                    <div>
                        <h3>Station: Moratuwa</h3>
                    </div>

                    <hr />

                    <div className='mt-2'>
                        <Row>
                            <Col lg={4}>
                                <Label className='text-small'>Petrol</Label>
                                <Input />
                            </Col>

                            <Col lg={4}>
                                <Label className='text-small'>Diesel</Label>
                                <Input />
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

export default StationsManagementTable

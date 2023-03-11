import {Fragment, useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {
    Card, Input, Row
} from 'reactstrap'
import {deliveryTableHandler} from "./tableHandler"
import {DELIVERY_DB} from "../../../DB/DB"
import axios from "../../../axios/axios"

const onChangeHandle = (userdata) => {
    console.log(userdata)
}

const DeliveryManagementTable = () => {
    // ** States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue] = useState('')
    const [delivery, setDelivery] = useState([])

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    const fetchDelivery = async () => {

        return axios.get("/deliveries").then(res => {
            setDelivery(res.data)
        })
    }

    useEffect(() => {
        fetchDelivery()
    }, [])

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? Math.ceil(delivery.length / 10) : Math.ceil(delivery.length / 10) || 1}
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
                        columns={deliveryTableHandler()}
                        paginationPerPage={10}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10}/>}
                        paginationDefaultPage={currentPage + 1}
                        paginationComponent={CustomPagination}
                        data={delivery}
                        onSelectedRowsChange={onChangeHandle}
                    />
                </div>
            </Card>
        </Fragment>
    )
}

export default DeliveryManagementTable

import {forwardRef, Fragment, useState} from 'react'
import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {
    Card, Input,
    Row
} from 'reactstrap'
import {employeeTableHandler} from "./tableHandler"
import {EMPLOYEE_MOCK_DB} from "../../../DB/DB"

const BootstrapCheckbox = forwardRef((props, ref) => (
    <div className='form-check'>
        <Input type='checkbox' ref={ref} {...props} />
    </div>
))

const onChangeHandle = (userdata) => {
    console.log(userdata)
}

const EmployeeManagementTable = () => {
    // ** States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue] = useState('')
    // const [filteredData] = useState([])
    // const employees = useSelector(selectEmployees)

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
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
            pageCount={searchValue.length ? Math.ceil(EMPLOYEE_MOCK_DB.length / 10) : Math.ceil(EMPLOYEE_MOCK_DB.length / 10) || 1}
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
                        columns={employeeTableHandler()}
                        paginationPerPage={10}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10}/>}
                        paginationDefaultPage={currentPage + 1}
                        paginationComponent={CustomPagination}
                        data={EMPLOYEE_MOCK_DB}
                        onSelectedRowsChange={onChangeHandle}
                    />
                </div>
            </Card>
        </Fragment>
    )
}

export default EmployeeManagementTable

import CustomerManagementTable from "./table/CustomerManagementTable"
import {useEffect, useState} from "react"
import axios from "../../axios/axios"
import {fireAlertError} from "../../utility/customUtils"
import * as xlsx from "xlsx"

const ManageCustomersView = () => {

    const [customers, setCustomers] = useState([])

    const fetchCustomers = async () => {

        return axios.get("/customer").then(res => {
            setCustomers(res.data)
        })
    }

    const generateReport = (fileName, data) => {
        if (data.length === 0) {
            fireAlertError("No Data !", "No data to create a report")
            return
        }
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(data)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `${fileName}.xlsx`, {type: 'file'})
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    return <div>
        <div className='d-flex justify-content-between align-items-center'>
            <h1 className='mb-3'>Manage Customers</h1>
            <button onClick={() => generateReport("customer-report", customers)} className='btn btn-primary'>Customer Report</button>
        </div>
        <CustomerManagementTable customers={customers}/>
    </div>
}

export default ManageCustomersView

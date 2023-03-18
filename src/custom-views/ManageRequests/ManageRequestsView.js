import FuelRequestsTable from "./table/FuelRequestsTable"
import axios from "../../axios/axios"
import {useEffect, useState} from "react"
import {fireAlertError} from "../../utility/customUtils"
import * as xlsx from "xlsx"

const ManageRequestsView = () => {

    const [requests, setRequests] = useState([])


    const fetchRequests = async () => {

        return axios.get("/fuel-request").then(res => {
            setRequests(res.data)
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
        fetchRequests()
    }, [])

    return <div>
        <div className='d-flex justify-content-between align-items-center'>
            <h1 className='mb-3'>Manage Fuel Requests</h1>
            <button
                onClick={() => generateReport("requests-report", requests)}
                className='btn btn-primary'>Requests report</button>
        </div>
        <FuelRequestsTable requests={requests} fetchRequest={fetchRequests}/>
    </div>
}

export default ManageRequestsView

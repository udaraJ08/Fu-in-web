import VehiclesManagementTable from "./table/VehiclesManagementTable"
import {useEffect, useState} from "react"
import axios from "../../axios/axios"
import {fireAlertError} from "../../utility/customUtils"
import * as xlsx from "xlsx"

const ManageVehiclesView = () => {

    const [vehicles, setVehicles] = useState([])

    const fetchVehicles = async () => {

        await axios.get("/vehicle").then(res => {
            setVehicles(res.data)
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
        fetchVehicles()
    }, [])

    return <div>
        <div className='d-flex align-items-center justify-content-between'>
            <h1 className='mb-3'>Manage Vehicles</h1>
            <button onClick={() => generateReport("vehicle-report", vehicles)} className='btn btn-primary'>Vehicle Report</button>
        </div>
        <VehiclesManagementTable vehicles={vehicles}/>
    </div>
}

export default ManageVehiclesView

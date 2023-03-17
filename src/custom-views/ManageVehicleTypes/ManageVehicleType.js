import {Card, Col, Input, Label, Row} from "reactstrap"
import VehicleTypeManagementTable from "./table/VehicleTypeManagementTable"
import Select from "react-select"
import axios from "../../axios/axios"
import {useEffect, useState} from "react"
import {dropdownPopulate, fireAlertError} from "../../utility/customUtils"
import * as xlsx from "xlsx"

const ManageVehicleType = () => {

    const [vehicleType, setVehicleType] = useState()

    const fetchVehicles = async () => {

        await axios.get("/vehicle-type").then(res => {
            setVehicleType(res.data)
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
            <h1 className='mb-3'>Manage Vehicle quotas</h1>
            <button className='btn btn-primary' onClick={() => generateReport("vehicle-types-report", vehicleType)}>Vehicle Report</button>
        </div>
        <Card className='mb-3 p-2'>
            <Row>

                <Col lg={3}>
                    <Label className='text-small'>Vehicle Type</Label>
                    <Select options={dropdownPopulate(vehicleType, "type", "id")}/>
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Quota (liters)</Label>
                    <Input />
                </Col>
            </Row>
            <div className='d-flex justify-content-end mt-2'>
                <button className='btn btn-gradient-primary text-small'>Add type</button>
            </div>
        </Card>
        <VehicleTypeManagementTable data={vehicleType}/>
    </div>
}

export default ManageVehicleType

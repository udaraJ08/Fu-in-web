import {Card, Col, Input, Label, Row} from "reactstrap"
import VehicleTypeManagementTable from "./table/VehicleTypeManagementTable"
import Select from "react-select"
import axios from "../../axios/axios"
import {useEffect, useState} from "react"
import {dropdownPopulate} from "../../utility/customUtils"

const ManageVehicleType = () => {

    const [vehicleType, setVehicleType] = useState()

    const fetchVehicles = async () => {

        await axios.get("/vehicle-type").then(res => {
            setVehicleType(res.data)
        })
    }

    useEffect(() => {
        fetchVehicles()
    }, [])

    return <div>
        <h1 className='mb-3'>Manage Vehicle quotas</h1>
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

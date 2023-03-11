import {Card, Col, Input, Label, Row} from "reactstrap"
import DeliveryManagementTable from "./table/DeliveryManagementTable"
import Select from "react-select"
import {useEffect, useState} from "react"
import axios from "../../axios/axios"
import {dropdownPopulate} from "../../utility/customUtils"

const DeliveryView = () => {

    const [stations, setStations] = useState([])

    const option = [
        {
            label: 'petrol',
            value: 'petrol'
        },
        {
            label: "diesel",
            value: "diesel"
        }
    ]

    const fetchStations = async () => {

        await axios.get("/station").then(res => {
            setStations(dropdownPopulate(res.data, "name", "id"))
        })
    }

    useEffect(() => {
        fetchStations()
    }, [])

    return <div>
        <h1 className='mb-3'>Manage Delivery</h1>
        <Card className='mb-3 p-2'>
            <Row>
                <Col lg={3}>
                    <Label className='text-small'>Station</Label>
                    <Select options={stations}/>
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Fuel Type</Label>
                    <Select options={option}/>
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Amount (liters)</Label>
                    <Input />
                </Col>
            </Row>
            <div className='d-flex justify-content-end mt-2'>
                <button className='btn btn-gradient-primary text-small'>Deliver Fuel</button>
            </div>
        </Card>
        <DeliveryManagementTable />
    </div>
}

export default DeliveryView

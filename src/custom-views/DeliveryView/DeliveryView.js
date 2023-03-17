import {Card, Col, Input, Label, Row} from "reactstrap"
import DeliveryManagementTable from "./table/DeliveryManagementTable"
import Select from "react-select"
import {useEffect, useState} from "react"
import axios from "../../axios/axios"
import {dropdownPopulate, fireAlertCustom, fireAlertError} from "../../utility/customUtils"
import * as xlsx from "xlsx"

const DeliveryView = () => {

    const [stations, setStations] = useState([])
    const [delivery, setDelivery] = useState([])

    const [selectedStation, setSelectedStation] = useState("")
    const [fuel, setFuel] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

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


    const fetchDelivery = async () => {

        return axios.get("/deliveries").then(res => {
            setDelivery(res?.data)
        })
    }

    const postDelivery = async () => {

        await axios.post("/deliveries", {
            station: selectedStation,
            fuel_type: fuel.toString().toUpperCase(),
            quantity_of_liters: amount,
            date
        }).then(() => {
            fetchStations()
            fireAlertCustom("Success !", "Station register")
        }).catch(err => {
            fireAlertError("An error occurred !", err.message)
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
        fetchStations()
        fetchDelivery()
    }, [])

    return <div>
        <div className='d-flex justify-content-between align-items-center'>
            <h1 className='mb-3'>Manage Delivery</h1>
            <button
                onClick={() => generateReport("delivery-report", delivery)}
                className='btn btn-success'>Delivery Report</button>
        </div>
        <Card className='mb-3 p-2'>
            <Row>
                <Col lg={3}>
                    <Label className='text-small'>Station</Label>
                    <Select
                        onChange={e => {
                            console.log(e)
                            setSelectedStation(e.value)
                        }}
                        options={stations}/>
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Fuel Type</Label>
                    <Select
                        onChange={e => {
                            console.log(e)
                            setFuel(e.value)
                        }}
                        options={option}/>
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Amount (liters)</Label>
                    <Input onChange={e => setAmount(e.target.value)}/>
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Delivery Date</Label>
                    <Input type='date' onChange={e => setDate(e.target.value)}/>
                </Col>
            </Row>
            <div className='d-flex justify-content-end mt-2'>
                <button
                    onClick={postDelivery}
                    className='btn btn-gradient-primary text-small'>Deliver Fuel</button>
            </div>
        </Card>
        <DeliveryManagementTable delivery={delivery}/>
    </div>
}

export default DeliveryView

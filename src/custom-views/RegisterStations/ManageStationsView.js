import {Card, Col, Input, Label, Row} from "reactstrap"
import StationsManagementTable from "./table/StationsManagementTable"
import {useEffect, useState} from "react"
import axios from "../../axios/axios"
import {fireAlertError, fireAlertSuccess} from "../../utility/customUtils"
import * as xlsx from "xlsx"

const ManageStationsView = () => {

    const [name, setName] = useState()
    const [location, setLocation] = useState()
    const [petrol, setPetrol] = useState()
    const [diesel, setDiesel] = useState()
    const [loading, setLoading] = useState(false)
    const [stations, setStations] = useState([])


    const fetchStations = async () => {

        return axios.get("/station").then(res => {
            setStations(res.data)
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
    }, [])

    const registerNewStation = async () => {

        setLoading(true)

        await axios.post("/station", {
            name,
            location,
            petrol,
            diesel
        }).then(() => {
            fetchStations()
            fireAlertSuccess("Success !", "New station registered successfully")
        }).catch(err => {
            fireAlertError("An error occurred", err.message)
        }).finally(() => {
            setLoading(true)
        })
    }

    return <div>
        <h1 className='mb-3'>Manage Stations</h1>
        <div className='d-flex justify-content-end mb-2'>
            <button
                onClick={() => generateReport("station-report", stations)}
                className='btn btn-success'>Station Report</button>
        </div>
        <Card className='mb-3 p-2'>
            <Row>
                <Col lg={3}>
                    <Label className='text-small'>name</Label>
                    <Input onChange={e => setName(e.target.value)}/>
                </Col>
                <Col lg={3}>
                    <Label className='text-small'>location</Label>
                    <Input onChange={e => setLocation(e.target.value)}/>
                </Col>
                <Col lg={3}>
                    <Label className='text-small'>Petrol Amount</Label>
                    <Input onChange={e => setPetrol(e.target.value)}/>
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Diesel Amount</Label>
                    <Input onChange={e => setDiesel(e.target.value)}/>
                </Col>
            </Row>
            <div className='d-flex justify-content-end mt-2'>
                <button
                    disabled={loading}
                    onClick={registerNewStation}
                    className='btn btn-gradient-primary text-small'>{
                        loading ? "Loading" : "Register Station"
                }</button>
            </div>
        </Card>
        <StationsManagementTable stations={stations}/>
    </div>
}

export default ManageStationsView

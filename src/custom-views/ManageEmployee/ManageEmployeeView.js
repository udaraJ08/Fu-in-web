import EmployeeManagementTable from "./table/EmployeeManagementTable"
import {Card, Col, Form, Input, Label, Row} from "reactstrap"
import {useEffect, useState} from "react"
import axios from "../../axios/axios"
import {dropdownPopulate, fireAlertSuccess} from "../../utility/customUtils"
import Select from "react-select"

const ManageEmployeeView = () => {

    const [employees, setEmployees] = useState([])
    const [stationOptions, setStationOptions] = useState([])

    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [dob, setDob] = useState("")
    const [station, setStation] = useState("")

    const fetchStations = async () => {

        await axios.get("/station").then(res => {
            setStationOptions(dropdownPopulate(res.data, "name", "id"))
        })
    }

    const fetchEmployees = async () => {

        await axios.get("/employee").then(res => {
            setEmployees(res?.data)
        })
    }

    const registerEmployees = async (e) => {

        e.preventDefault()

        await axios.post("/employee", {
            name,
            nic,
            address,
            dob,
            station,
            email,
            mobile
        }).then(res => {
            setEmployees(dropdownPopulate(res.data, "name", "id"))
            fetchEmployees()
            fireAlertSuccess("Success !", "Successfully employee registered")
        })
    }

    useEffect(() => {
        fetchStations()
        fetchEmployees()
    }, [])

    return <div>
        <h1 className='mb-3'>Manage Employee</h1>

        <Card className="p-2">
            <Form>
                <Row>
                    <Col lg={4}>
                        <Label className='text-small'>Employee Name</Label>
                        <Input onChange={e => setName(e.target.value)}/>
                    </Col>

                    <Col lg={3}>
                        <Label className='text-small'>Employee Email</Label>
                        <Input type='email' onChange={e => setEmail(e.target.value)}/>
                    </Col>

                    <Col lg={3}>
                        <Label className='text-small'>Employee NIC</Label>
                        <Input onChange={e => setNic(e.target.value)}/>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col lg={3}>
                        <Label className='text-small'>Employee Tel.No</Label>
                        <Input onChange={e => setMobile(e.target.value)}/>
                    </Col>

                    <Col lg={3}>
                        <Label className='text-small'>DOB</Label>
                        <Input onChange={e => setDob(e.target.value)} type='date'/>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col lg={12}>
                        <Label className='text-small'>Address</Label>
                        <Input onChange={e => setAddress(e.target.value)} type='textarea'/>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col lg={4}>
                        <Label className='text-small'>Station</Label>
                        <Select onChange={e => setStation(e.value)} options={stationOptions}/>
                    </Col>
                </Row>

                <div className='mt-2 d-flex justify-content-end'>
                    <button onClick={registerEmployees} className='btn btn-gradient-primary f-Staatliches text-medium'>REGISTER EMPLOYEE</button>
                </div>
            </Form>
        </Card>

        <EmployeeManagementTable data={employees}/>
    </div>
}

export default ManageEmployeeView

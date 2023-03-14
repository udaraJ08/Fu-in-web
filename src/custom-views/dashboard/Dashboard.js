import {Card, CardBody, CardFooter, CardHeader, Col, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis} from "recharts"
import {Activity, AlertTriangle, Check} from "react-feather"
import {useEffect, useState} from "react"
import IncomeReportChart from "../../custom-components/IncomerReportView/IncomeReportChart"
import axios from "../../axios/axios"
import FuelRequestsTable from "../ManageRequests/table/FuelRequestsTable"
import {APPROVED, COMPLETED, DONE, PENDING, REQUEST} from "../../utility/constants"
import * as xlsx from "xlsx"
import {fireAlertError} from "../../utility/customUtils"

const Dashboard = () => {
    const [goodOpen, setGoodOpen] = useState(false)
    const [warningOpen, setWarningOpen] = useState(false)
    const [criticalOpen, setCriticalOpen] = useState(false)

    const [paymentTotal, setPaymentTotal] = useState(0)

    const [request, setRequest] = useState([])
    const [payment, setPayment] = useState([])

    // eslint-disable-next-line no-unused-vars
    const categorizeDeliveries = (status) => {

        return request.filter(e => {
            return e.status === status
        })
    }

    const fetchRequests = async () => {

        await axios.get('/fuel-request').then(res => {
            setRequest(res?.data)
        })
    }

    const fetchPayment = async () => {

        await axios.get('/payment').then(res => {
            setPayment(res?.data)
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

    const getPaymentMovementChart = () => {
        return [
            {
                name: 'january',
                total: 0
            },
            {
                name: 'february',
                total: 0
            },
            {
                name: 'march',
                total: paymentTotal
            },
            {
                name: 'april',
                total: 0
            },
            {
                name: 'may',
                total: 0
            },
            {
                name: 'june',
                total: 0
            }
        ]
    }

    useEffect(() => {
        let total = 0
        payment.forEach((e) => {
            total += e.amount
        })
        setPaymentTotal(total)
    }, [payment])

    useEffect(() => {
        fetchRequests()
        fetchPayment()
    }, [])

    return <div>
        <h1 className='f-Staatliches mb-2'>Inventory Section</h1>
        <Row>
            <div style={{width: '30%'}}>
                <Card style={{height: '40vh'}}>
                    <CardBody>
                        <ResponsiveContainer>
                            <BarChart data={[
                                {
                                    name: "Request Data",
                                    request: categorizeDeliveries(REQUEST).length,
                                    pending:  categorizeDeliveries(PENDING).length,
                                    done: categorizeDeliveries(DONE).length
                                }
                            ]}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Legend/>
                                <Bar barSize={40} dataKey="request" fill="rgba(46, 213, 115, 0.6)"/>
                                <Bar barSize={40} dataKey="pending" fill="rgba(255, 165, 2, 0.6)"/>
                                <Bar barSize={40} dataKey="done" fill="rgba(235, 77, 75, 0.6)"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
            </div>
            <div style={{
                width: '70%'
            }}>
                <Row>
                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: REQUESTED</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Check size={100} color='rgba(46, 213, 115,1.0)'/>
                                </div>
                                <div>
                                    <b className='text-large text-success'>{categorizeDeliveries(REQUEST).length} ITEM(S)</b>
                                </div>
                            </CardBody>
                            <CardFooter onClick={() => setGoodOpen(!goodOpen)} className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: PENDING</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <AlertTriangle size={100} color='#fbc531'/>
                                </div>
                                <div>
                                    <b className='text-large text-warning'>{categorizeDeliveries(PENDING).length} ITEM(S)</b>
                                </div>
                            </CardBody>
                            <CardFooter onClick={() => setWarningOpen(!warningOpen)} className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: DONE</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Activity size={100} color='#eb4d4b'/>
                                </div>
                                <div>
                                    <b className='text-large text-danger'>{categorizeDeliveries(DONE).length} ITEM(S)</b>
                                </div>
                            </CardBody>
                            <CardFooter onClick={() => setCriticalOpen(!criticalOpen)} className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Row>
        <Row className='d-flex align-items-baseline'>
            <Col lg={3}>
                <Card
                    className='btn'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>This month items:</p>
                        <h4 className='ml-2 mb-0 p-0 font-bold'>{request.length}</h4>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={3}>
                <Card
                    onClick={() => generateReport("Reuqested Requests", categorizeDeliveries(REQUEST))}
                    className='btn btn-gradient-success'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Requested requests Report</p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3}>
                <Card
                    onClick={() => generateReport("Pending Requests", categorizeDeliveries(PENDING))}
                    className='btn btn-gradient-warning'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Pending Request Report</p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3}>
                <Card
                    onClick={() => generateReport("Done Requests", categorizeDeliveries(DONE))}
                    className='btn btn-gradient-danger'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Done request Report</p>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <hr/>
        <h1 className='f-Staatliches mb-3 mt-3'>Income Section</h1>
        <Row>
            <Col lg={3}>
                <Card style={{height: '25vh'}}>
                    <CardHeader className='text-medium font-bold'>Total income this Month</CardHeader>
                    <CardBody className='d-center flex-column'>
                        {/*<div className='mb-1'>*/}
                        {/*    <DollarSign size={25} color='rgba(46, 213, 115,1.0)'/>*/}
                        {/*</div>*/}
                        <div>
                            <b style={{
                                fontSize: 25
                            }} className='text-success'>{paymentTotal}/=</b>
                        </div>
                    </CardBody>
                    <CardFooter className='d-center text-grey'>
                        Based on the system uploaded sales
                    </CardFooter>
                </Card>

                <Card style={{height: '25vh'}}>
                    <CardHeader className='text-medium font-bold'>Total pumps this month</CardHeader>
                    <CardBody className='d-center flex-column'>
                        {/*<div className='mb-1'>*/}
                        {/*    <Target size={25} color='#7468f0'/>*/}
                        {/*</div>*/}
                        <div>
                            <b style={{
                                fontSize: 25
                            }} className='text-primary'>{payment.length}</b>
                        </div>
                    </CardBody>
                    <CardFooter className='d-center text-grey'>
                        Based on the system uploaded sales
                    </CardFooter>
                </Card>

                <Card
                    onClick={() => generateReport("Income report", payment)}
                    className='btn btn-gradient-primary'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Generate Income Report</p>
                    </CardBody>
                </Card>

                <Card
                    onClick={() => generateReport("Income movement", getPaymentMovementChart())}
                    className='btn btn-gradient-success'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Generate income movement</p>
                    </CardBody>
                </Card>

            </Col>
            <Col lg={9}>
                <IncomeReportChart data={getPaymentMovementChart()}/>
            </Col>
        </Row>

        {/*--------------------------------------*/}
        {/*----Good level items modal started----*/}
        {/*--------------------------------------*/}
        <Modal size="xl"
               className='modal-dialog-centered' isOpen={goodOpen} toggle={() => setGoodOpen(!goodOpen)} backdrop={3}>
            <ModalHeader toggle={() => setGoodOpen(!goodOpen)}>
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: GOOD</h3>
            </ModalHeader>
            <ModalBody>
                <FuelRequestsTable requests={categorizeDeliveries(REQUEST)}/>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Good level items modal finished----*/}
        {/*---------------------*/}

        {/*--------------------------------------*/}
        {/*----Good level items modal started----*/}
        {/*--------------------------------------*/}
        <Modal size="xl"
               className='modal-dialog-centered' isOpen={warningOpen} toggle={() => setWarningOpen(!warningOpen)} backdrop={3}>
            <ModalHeader toggle={() => setWarningOpen(!warningOpen)}>
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: PENDING</h3>
            </ModalHeader>
            <ModalBody>
                <FuelRequestsTable requests={categorizeDeliveries(PENDING)}/>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Good level items modal finished----*/}
        {/*---------------------*/}

        {/*--------------------------------------*/}
        {/*----Good level items modal started----*/}
        {/*--------------------------------------*/}
        <Modal size="xl"
               className='modal-dialog-centered' isOpen={criticalOpen} toggle={() => setCriticalOpen(!criticalOpen)} backdrop={3}>
            <ModalHeader toggle={() => setCriticalOpen(!criticalOpen)}>
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: DONE</h3>
            </ModalHeader>
            <ModalBody>
                <FuelRequestsTable requests={categorizeDeliveries(DONE)}/>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Good level items modal finished----*/}
        {/*---------------------*/}
    </div>
}

export default Dashboard

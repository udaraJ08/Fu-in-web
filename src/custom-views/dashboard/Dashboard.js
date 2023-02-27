import {Card, CardBody, CardFooter, CardHeader, Col, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis} from "recharts"
import {Activity, AlertTriangle, Check} from "react-feather"
import {useState} from "react"
import IncomeReportChart from "../../custom-components/IncomerReportView/IncomeReportChart"

const Dashboard = () => {
    const [goodOpen, setGoodOpen] = useState(false)
    const [warningOpen, setWarningOpen] = useState(false)
    const [criticalOpen, setCriticalOpen] = useState(false)

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
                                    accept: 10,
                                    pending:  30,
                                    cancel: 40
                                }
                            ]}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Legend/>
                                <Bar barSize={40} dataKey="accept" fill="rgba(46, 213, 115, 0.6)"/>
                                <Bar barSize={40} dataKey="pending" fill="rgba(255, 165, 2, 0.6)"/>
                                <Bar barSize={40} dataKey="cancel" fill="rgba(235, 77, 75, 0.6)"/>
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
                            <CardHeader className='text-medium font-bold'>LEVEL: ACCEPTED</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Check size={100} color='rgba(46, 213, 115,1.0)'/>
                                </div>
                                <div>
                                    <b className='text-large text-success'>{10} ITEM(S)</b>
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
                                    <b className='text-large text-warning'>{10} ITEM(S)</b>
                                </div>
                            </CardBody>
                            <CardFooter onClick={() => setWarningOpen(!warningOpen)} className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: CANCELLED</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Activity size={100} color='#eb4d4b'/>
                                </div>
                                <div>
                                    <b className='text-large text-danger'>{10} ITEM(S)</b>
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
                        <h4 className='ml-2 mb-0 p-0 font-bold'>{20}</h4>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={3}>
                <Card className='btn btn-gradient-success'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Completed Request Report</p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3}>
                <Card className='btn btn-gradient-warning'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Pending Request Report</p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3}>
                <Card className='btn btn-gradient-danger'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Cancelled Request Report</p>
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
                            }} className='text-success'>{10000}/=</b>
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
                            }} className='text-primary'>{15}</b>
                        </div>
                    </CardBody>
                    <CardFooter className='d-center text-grey'>
                        Based on the system uploaded sales
                    </CardFooter>
                </Card>

                <Card className='btn btn-gradient-primary'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Generate Income Report</p>
                    </CardBody>
                </Card>

                <Card className='btn btn-gradient-success'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Generate income movement</p>
                    </CardBody>
                </Card>

            </Col>
            <Col lg={9}>
                <IncomeReportChart/>
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
                {/*<InventorManagementTable stockItems={goodItems}/>*/}
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
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: WARNING</h3>
            </ModalHeader>
            <ModalBody>
                {/*<InventorManagementTable stockItems={warningItems}/>*/}
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
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: CRITICAL</h3>
            </ModalHeader>
            <ModalBody>
                {/*<InventorManagementTable stockItems={goodItems}/>*/}
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Good level items modal finished----*/}
        {/*---------------------*/}
    </div>
}

export default Dashboard

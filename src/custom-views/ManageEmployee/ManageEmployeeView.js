import EmployeeManagementTable from "./table/EmployeeManagementTable"
import {Card, Col, Form, Input, Label, Row} from "reactstrap"

const ManageEmployeeView = () => {

    return <div>
        <h1 className='mb-3'>Manage Employee</h1>

        <Card className="p-2">
            <Form>
                <Row>
                    <Col lg={4}>
                        <Label className='text-small'>Employee Name</Label>
                        <Input />
                    </Col>

                    <Col lg={3}>
                        <Label className='text-small'>Employee Email</Label>
                        <Input />
                    </Col>

                    <Col lg={3}>
                        <Label className='text-small'>Employee NIC</Label>
                        <Input />
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col lg={3}>
                        <Label className='text-small'>Employee Tel.No</Label>
                        <Input />
                    </Col>

                    <Col lg={3}>
                        <Label className='text-small'>DOB</Label>
                        <Input type='date'/>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col lg={12}>
                        <Label className='text-small'>Address</Label>
                        <Input type='textarea'/>
                    </Col>
                </Row>

                <div className='mt-2 d-flex justify-content-end'>
                    <button className='btn btn-gradient-primary f-Staatliches text-medium'>REGISTER EMPLOYEE</button>
                </div>
            </Form>
        </Card>

        <EmployeeManagementTable />
    </div>
}

export default ManageEmployeeView

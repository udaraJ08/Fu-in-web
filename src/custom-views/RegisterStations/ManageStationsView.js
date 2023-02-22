import {Card, Col, Input, Label, Row} from "reactstrap"
import StationsManagementTable from "./table/StationsManagementTable"

const ManageStationsView = () => {

    return <div>
        <h1 className='mb-3'>Manage Stations</h1>
        <Card className='mb-3 p-2'>
            <Row>
                <Col lg={3}>
                    <Label className='text-small'>name</Label>
                    <Input />
                </Col>
                <Col lg={3}>
                    <Label className='text-small'>location</Label>
                    <Input />
                </Col>
                <Col lg={3}>
                    <Label className='text-small'>Petrol Amount</Label>
                    <Input />
                </Col>

                <Col lg={3}>
                    <Label className='text-small'>Diesel Amount</Label>
                    <Input />
                </Col>
            </Row>
            <div className='d-flex justify-content-end mt-2'>
                <button className='btn btn-gradient-primary text-small'>Register Station</button>
            </div>
        </Card>
        <StationsManagementTable />
    </div>
}

export default ManageStationsView

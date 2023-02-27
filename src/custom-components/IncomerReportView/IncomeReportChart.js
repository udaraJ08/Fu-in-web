import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from "recharts"
import {Card, CardBody} from "reactstrap"
import {INCOME_CHART} from "../../DB/DB"

const IncomeReportChart = () => {
    return <div>
        <Card style={{height: '86vh'}}>
            <CardBody>
                <ResponsiveContainer>
                    <BarChart data={INCOME_CHART}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Bar barSize={40} dataKey="total" fill="rgba(46, 213, 115, 0.6)"/>
                    </BarChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    </div>
}

export default IncomeReportChart

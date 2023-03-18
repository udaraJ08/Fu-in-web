import {DONE, NOT_PAYED, PENDING, REQUEST} from "../../../utility/constants"
import {Badge} from "reactstrap"

export const fuelRequestsTableHandler = () => {

    const handleBadges = (status) => {

        switch (status) {
            case REQUEST:
                return <Badge color='light-warning'>Pending</Badge>
            case NOT_PAYED:
                return <Badge color='light-danger'>Cancelled</Badge>
            case DONE:
                return <Badge color='light-success'>Payed</Badge>
            case PENDING:
                return <Badge color='light-primary'>Approved</Badge>
            default:
                return <Badge color='light-success'>Payed</Badge>
        }
    }

    return  [
        {
            name: 'STATION',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.station?.name
            }
        },
        {
            name: 'REQUEST DATE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return new Date(row.request_date_time).toLocaleDateString()
            }
        },
        // {
        //     name: 'CUSTOMER',
        //     sortable: true,
        //     minWidth: '250px',
        //     selector: row => {
        //         return row?.customer
        //     }
        // },
        {
            name: 'STATION',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.station?.name
            }
        },
        {
            name: 'VEHICLE NUMBER',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.vehicle?.register_number
            }
        },
        {
            name: 'STATUS',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return handleBadges(row?.status)
            }
        }
    ]
}

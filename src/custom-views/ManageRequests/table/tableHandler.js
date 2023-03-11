import moment from "moment"

export const fuelRequestsTableHandler = () => {

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
                return moment(row.request_date_time).format('DD/mm/YYYY')
            }
        },
        {
            name: 'CUSTOMER',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.customer
            }
        },
        {
            name: 'STATUS',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.status
            }
        }
    ]
}

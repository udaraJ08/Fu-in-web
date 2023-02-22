export const fuelRequestsTableHandler = () => {

    return  [
        {
            name: 'STATION',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.station
            }
        },
        {
            name: 'REQUEST DATE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.request_date
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

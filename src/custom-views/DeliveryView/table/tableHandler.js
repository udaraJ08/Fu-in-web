import moment from "moment"

export const deliveryTableHandler = () => {

    return  [
        {
            name: 'DELIVERED DATE',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return moment(row?.date).format("DD-mm-yyyy")
            }
        },
        {
            name: 'STATION NAME',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.station?.name
            }
        },
        {
            name: 'FUEL TYPE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.fuel_type
            }
        },
        {
            name: 'AMOUNT',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.quantity_of_liters
            }
        }
    ]
}

import { Edit, Trash2 } from "react-feather"

export const deliveryTableHandler = () => {

    return  [
        {
            name: 'DELIVERED DATE',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.date
            }
        },
        {
            name: 'STATION NAME',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.station
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
                return row?.amount
            }
        }
    ]
}

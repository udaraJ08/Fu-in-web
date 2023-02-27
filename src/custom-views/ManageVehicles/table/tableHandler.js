import { Edit, Trash2 } from "react-feather"

export const vehiclesTableHandler = () => {

    return  [
        {
            name: 'CHASSIS NUMBER',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.chassis_number
            }
        },
        {
            name: 'REGISTER NUMBER',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.register_number
            }
        },
        {
            name: 'TYPE',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.type?.vehicle_type
            }
        },
        {
            name: 'OWNER',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.customer?.name
            }
        }
    ]
}

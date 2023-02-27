import { Edit, Trash2 } from "react-feather"

export const vehicleTypeTableHandler = () => {

    return  [
        {
            name: 'VEHICLE TYPE',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.type
            }
        },
        {
            name: 'QUOTA (liters)',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.quota
            }
        }
    ]
}

import { Edit, Trash2 } from "react-feather"

export const stationTableHandler = () => {

    return  [
        {
            name: 'STATION NAME',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.station_id?.name
            }
        },
        {
            name: 'LOCATION',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.station_id?.location
            }
        },
        {
            name: 'PETROL AMOUNT',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.petrol?.amount
            }
        },
        {
            name: 'DIESEL AMOUNT',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.diesel?.amount
            }
        }
    ]
}

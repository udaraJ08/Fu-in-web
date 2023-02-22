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
            name: 'FUEL TYPE',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.fuel_id?.fuel_type
            }
        },
        {
            name: 'FUEL PRICE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.fuel_id?.price
            }
        },
        {
            name: 'FUEL PRICE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.amount
            }
        }
    ]
}

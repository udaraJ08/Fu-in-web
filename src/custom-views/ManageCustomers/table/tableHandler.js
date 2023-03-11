import { Edit, Trash2 } from "react-feather"
import Avatar from "../../../@core/components/avatar"

export const customerTableHandler = () => {

    return  [
        {
            name: '',
            width: '120px',
            selector: () => {
                return <Avatar img="https://st4.depositphotos.com/14903220/22197/v/600/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"/>
            }
        },
        {
            name: 'NAME',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.name
            }
        },
        {
            name: 'DOB',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.dob
            }
        },
        {
            name: 'EMAIL',
            sortable: true,
            minWidth: '250px',
            selector: row => {
                return row?.email
            }
        },
        {
            name: 'NIC',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.nic
            }
        },
        {
            name: 'MOBILE NO.',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.mobile
            }
        },
        {
            name: 'ADDRESS',
            sortable: true,
            minWidth: '300px',
            selector: row => {
                return row.address
            }
        }
    ]
}

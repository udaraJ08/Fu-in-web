import moment from "moment"

export const employeeTableHandler = () => {

    return  [
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
                return moment(row.dob).format("DD-MM-YYYY")
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
            name: 'telephone No.',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.mobile
            }
        },
        {
            name: 'ADDRESS',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.address
            }
        }
    ]
}

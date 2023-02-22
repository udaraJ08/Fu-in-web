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
            name: 'GENDER',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.gender
            }
        },
        {
            name: 'telephone No.',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.telephone_number
            }
        },
        {
            name: 'ADDRESS',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.address
            }
        },
        {
            name: 'ROLE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.role
            }
        }
    ]
}

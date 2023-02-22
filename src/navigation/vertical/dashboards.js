// ** Icons Import
import {
    Home,
    Users, Droplet, Mail, Trello, Briefcase
} from 'react-feather'

export default [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <Home size={12}/>,
        navLink: '/dashboard'
    },
    {
        id: 'manageCustomers',
        title: 'Manage Customers',
        icon: <Users size={12}/>,
        navLink: '/customers'
    },
    {
        id: 'manageStations',
        title: 'Manage Stations',
        icon: <Droplet size={12}/>,
        navLink: '/stations'
    },
    {
        id: 'manageRequests',
        title: 'Manage Requests',
        icon: <Mail size={12}/>,
        navLink: '/requests'
    },
    {
        id: 'deliveryView',
        title: 'Manage Deliveries',
        icon: <Trello size={12}/>,
        navLink: '/delivery'
    },
    {
        id: 'employeeView',
        title: 'Manage Employee',
        icon: <Briefcase size={12}/>,
        navLink: '/employee'
    }
]

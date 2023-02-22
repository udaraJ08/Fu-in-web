import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../custom-views/dashboard/Dashboard'))
  },
  {
    path: '/customers',
    component: lazy(() => import('../../custom-views/ManageCustomers/ManageCustomersView'))
  },
  {
    path: '/stations',
    component: lazy(() => import('../../custom-views/RegisterStations/ManageStationsView'))
  },
  {
    path: '/requests',
    component: lazy(() => import('../../custom-views/ManageRequests/ManageRequestsView'))
  },
  {
    path: '/delivery',
    component: lazy(() => import('../../custom-views/DeliveryView/DeliveryView'))
  },
  {
    path: '/employee',
    component: lazy(() => import('../../custom-views/ManageEmployee/ManageEmployeeView'))
  }
]

export default DashboardRoutes

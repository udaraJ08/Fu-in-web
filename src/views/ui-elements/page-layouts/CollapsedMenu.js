// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

const CollapsedMenu = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbParent='Layouts'
        breadCrumbActive='Collapsed menu'
        breadCrumbTitle='Layout collapsed menu'
      />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Info: </span>
          <span>
            Use this layout to set menu (navigation) default collapsed. Please check{' '}
            <a
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/page-layouts'
              target='_blank'
            >
              the Layout collapsed menu documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
    </Fragment>
  )
}

export default CollapsedMenu

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './category'
import Product from './product'
import PanelHeader from 'components/layout-components/PanelHeader'
import Dashboard from './dashboard'
import DashboardMessages from './dashboard/DashboardMessages'
import DashboardTasks from './dashboard/DashboardTasks'
import PanelFooter from 'components/layout-components/PanelFooter'

function PrivateLayout() {
  return (<>
    <PanelHeader />
    <Routes>


      <Route path='/' element={<Dashboard />}>
      <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>


      <Route path="/categories/*" element={<Category />} />
      <Route path="/products/*" element={<Product />} />
    </Routes>

    <PanelFooter/>
  </>
  )
}

export default PrivateLayout
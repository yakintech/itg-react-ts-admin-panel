import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './category'
import Product from './product'

function PrivateLayout() {
  return (<>
    <Routes>
        <Route path="/categories/*" element={<Category/>} />
        <Route path="/products/*" element={<Product/>} />
    </Routes>
  </>
  )
}

export default PrivateLayout
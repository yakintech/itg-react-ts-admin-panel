import React from 'react'
import { Link } from 'react-router-dom'

function PanelHeader() {
  
  return (<>
      <ul>
        <li><Link to='/categories'>Categories</Link></li>
      </ul>
  </>
  )
}

export default PanelHeader
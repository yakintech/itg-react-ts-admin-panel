import { baseApi } from 'api/baseApi'
import ITGGrid from 'components/core-components/grid'
import React, { useEffect, useState } from 'react'

function List() {

  const [categories, setcategories] = useState([])


  useEffect(() => {

    baseApi.getAll('categories')
      .then((data) => {
        setcategories(data)
      }).catch((error) => {
        console.log("Error in List: ", error);
      })

  }, [])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 130
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 130
    }
  ]


  return (<>
  <div style={{ height: 400, width: '100%' }}>
  <ITGGrid
    rows={categories}
    columns={columns}
    />

  </div>
 
  </>
  )
}

export default List
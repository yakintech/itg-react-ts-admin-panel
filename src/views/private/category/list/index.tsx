import { Button } from '@mui/material'
import { baseApi } from 'api/baseApi'
import ITGGrid from 'components/core-components/grid'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function List() {

  const [categories, setcategories] = useState([])


  const navigate = useNavigate()

  const location  = useLocation();


  //useParams, useLocation, useNavigate

  console.log("Location: ", location);

  useEffect(() => {

    loadCategories()

  }, [])

  const loadCategories = () => {
    baseApi.getAll('categories')
      .then((data) => {
        setcategories(data)
      }).catch((error) => {
        console.log("Error in List: ", error);
      })
  }

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
    },
    {
      field:'delete',
      headerName: 'Delete',
      width: 130,
      renderCell: (params : any) => {
        return (
          <div>
            <Button color='error' variant='contained' onClick={() => handleDelete(params.row.id)}>Delete</Button>
          </div>
        )
      }
    },
    {
      field:'detail',
      headerName: 'Detail',
      width: 130,
      renderCell: (params : any) => {
        return (
          <div>
            <Button variant='contained' onClick={() => navigate('/categories/' + params.row.id)}>Detail</Button>
          </div>
        )
      }
    }
  ]


  const handleDelete = (id: number) => {

    const confirm = window.confirm('Are you sure you want to delete this category?')

    if (!confirm) {
      return
    }

    baseApi.delete('categories', id)
    .then((data) => {
      loadCategories()
    }).catch((error) => {
      console.log("Error in List: ", error);
    })
  
  }


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
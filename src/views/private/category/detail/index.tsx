import { baseApi } from 'api/baseApi';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Detail() {

    const { id } = useParams();
    const navigate = useNavigate()

    // const [detail, setdetail] = useState({name:'', description:''})
    // const [detail, setdetail] = useState<any>({})
    const [detail, setdetail] = useState<DetailModel>({})



    useEffect(() => {
        baseApi.getOne('categories', id)
            .then((data) => {
                setdetail(data)
            }).catch((error) => {
                console.log("Error in Detail: ", error);
            })
    }, [])


    return (<>
        <button onClick={() => navigate(-1)}>Go BACK!</button>
        <h1>Detail Page</h1>
        <p>ID: {id}</p>
        <p>Name: {detail.name?.toUpperCase()}</p>
        <p>Description: {detail.description}</p>

    </>
    )
}

export default Detail


interface DetailModel {
    id?: number,
    name?: string,
    description?: string
}
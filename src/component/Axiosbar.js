import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Axiosbar() {

    const [data,setData] = useState([])
   
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/alluser',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5000",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
            }
        })
            .then(function (response) {
                setData(response)
                // console.log(response.data)
            });
            // console.log('data',data)
    }, [])
    return (
        <div>
            {

            }
        </div>
    )
}

import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Addreview } from './Addreview/Addreview'

import "./Blog.css"
const Blog = () => {
    const [data,setdata] = useState([])
    const navigate = useNavigate()

    const getdata = () => {
        axios.get("http://localhost:8080/getallpost").then((res)=>{
            if(res.data)
            {
                console.log(res.data)
                setdata(res.data)
            }
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
       getdata()
    },[])
  return (
    <>
    <div className="container">
        {
            data.map((ele)=>{
                return <div  key ={ele._id}
                onClick={()=>{
                    navigate(`/blog/${ele._id}`)
                 }}
                className='list'>
                    <h3>{ele.title}</h3>
                    <p>{ele.body} ...</p> 
                </div>
            })
        }
    </div>
   
    </>
  )
}

export default Blog
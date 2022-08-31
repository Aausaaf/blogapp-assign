import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import "../Blog.css"
const Yourblog = () => {
    const [data,setdata] = useState([])
    const navigate = useNavigate()

    const getdata = () => {
        axios.get("http://localhost:8080/getpostbyuser",
        {
            headers:{
                token:localStorage.getItem("token")
            }
        }).then((res)=>{
            if(res.data)
            {
                console.log(res.data)
                setdata(res.data)
            }
        }).catch((err)=>{
            console.log(err.message)
        })
    }

   const  handledelete = (id) => {
        axios.delete(`http://localhost:8080/${id}`,
        {
            headers:{
                token:localStorage.getItem("token")
            }
        })
        .then((res)=>{
            if(res.data)
            {
                alert("Post has deleted")
            }
        }).catch((err)=>{
            alert(err.message)
            console.log(err)
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
               
                className='list'>
                    <div style={{display:"flex"}} className="flex"><h3
                     onClick={()=>{
                        navigate(`/blog/${ele._id}`)
                     }}
                     >{ele.title}</h3><button
                     className='delete_button'
                    onClick={()=>{
                      handledelete(ele._id)
                    }}>Delete</button></div>
                    <p  onClick={()=>{
                    navigate(`/blog/${ele._id}`)
                 }}>{ele.body}</p>
                </div>
            })
        }
    </div>
    </>
  )
}

export default Yourblog
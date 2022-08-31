import axios from 'axios'
import React, { useState } from 'react'
import "../Blog.css"
export const Addreview = () => {
    const[data,setdata] = useState("")
    const postreview = () => {
        axios.post("http://localhost:8080/postreview",{
            review:data
        }).then
        ((res)=>{
            if(res.data)
            {
                alert("review posted")
            }
        }).catch((err)=>{
            console.log(err)
        })    }
  return (
    <>
    <input type="text" value={data}
    className="review_input"
    placeholder='Add review ...'
    onChange={(e)=>{
        setdata(e.target.value)
    }} />
    <button 
    className='review_button'
    onClick={()=>{
        postreview()
    }}
    >Submit</button>
    </>
  )
}

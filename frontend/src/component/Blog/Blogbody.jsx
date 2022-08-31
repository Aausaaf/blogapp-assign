import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Datacontext } from '../context/Coutercontext'
import { Addreview } from './Addreview/Addreview'
import "./Blog.css"

const Blogbody = (props) => {
    const navigate = useNavigate()
    const param = useParams()
    console.log(param)
    const {data,handledata} = useContext(Datacontext)
    let singledata = data.filter((ele)=>ele._id==param.id)
    
  return (
   <>
    {
       singledata.map((ele)=>{
       return <div
        key={ele._id}
         className="div">
        <h2>{ele.title}</h2>
        <p>{ele.body}</p>
    </div>
       })
    }
    <Addreview/>
   </>
  )
}

export default Blogbody
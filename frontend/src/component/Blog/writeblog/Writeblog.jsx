import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Writeblog = () => {
    const [title,settitle] = useState("")
    const [body,setbody] = useState("")
    const postdata = (event) => {
        event.preventDefault()
        if(title.length == 0 )
        {
            alert("Plese fill title")
            settitle("")
            setbody("")

        }
        if( body.length == 0)
        {
            alert("Plese fill blog Body")
            settitle("")
            setbody("")

        }
        let data = {
            title:title,
            body:body
        }
          
        const handlepost = async() => {
            event.preventDefault()
            console.log(title, body);
            try {
              await fetch(`http://localhost:8080/createpostwithid`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  token: localStorage.getItem('token')
                },
                body: JSON.stringify({
                  title,
                  body
                })
              });
              // setCreateSuccess(true);
              // setTimeout(()=>{
              //   setCreateSuccess(false);
              // },3000);
              settitle("");
              setbody("");
            } catch (error) {
              console.log(error)
            }
          }
          handlepost()
    }
  return (
   <>
  <form action="">
  <input type="text"
  className='title'
   value={title}
   placeholder="Write Title ..."
   onChange={(event)=>{
       settitle(event.target.value)
   }} />
   <br />
   <textarea name="" id="" cols="30" rows="10"
   value={body}
   className="textarea"
   placeholder="Write Story ..."
   onChange={(event)=>{
    setbody(event.target.value)
   }}></textarea>
    <button
    className='public_button'
    onClick={(event)=>{
        postdata(event)
    }}>Public</button>
  </form>
   </>
  )
}

export default Writeblog
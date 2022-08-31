
import "../page/Home.css"
import Signup from './Signup/signup'
import { useState } from "react"
import Login from "./Login/Login"
import axios from "axios"
import React from 'react'
import { useNavigate } from "react-router"
const Navbar = () => {
    const [signupDisplay,setsignupdisplay] = useState(false)
    const [loginDisplay,setlogindisplay] = useState(false)
    const [signuphide,setsignuphide] = useState("inline")
    const [loginhide,setloginhide] = useState("inline")
    const [logouthide,setlogouthide] = useState("none")
    const navigate = useNavigate()
     const [username,setusername] = useState("")
       const handlesignup = (t) => {
        setsignupdisplay(t)
       }


       const handlelogin = (t) => {
        setlogindisplay(t)
       }


       const handlesignupdisplay = (t) => {
        setsignuphide(t)
       }


       const handlelogindisplay = (t) => {
        setloginhide(t)
       }


       const handleusername = (t) => {
        setusername(t)
       }


       const handlelogoutdisplay = (t) => {
        setlogouthide(t)
       }

       const getuser = (t) => {

        axios.get(`http://localhost:8080/isLoggedIn`,{

            headers:{

                token:t
           
              }
        }).then((res)=>{

            console.log(res.data)

            if(res.data)
            {
                
                setsignuphide("none")
                setloginhide("none")
                handleusername(res.data.name)
                setlogouthide("inline")
            }

        }).catch((err)=>{
            console.log(err)
        })
       }

       React.useEffect(() => {

        if(!localStorage.getItem('token')){
          
        }
        else{

          getuser(localStorage.getItem('token'));

        }
      },[]);

  
  return (
    <>
     <div className="navbar">

        <div className="logo" onClick={()=>{
            navigate("/")
        }}>Blog</div>
        {
          (localStorage.getItem("token"))?<>
          <div className="yourblog" onClick={()=>{
            navigate("/yourblog")
        }}>Your Blog</div>
         <div className="writestory" onClick={()=>{
            navigate("/writeblog")
        }}>Write blog</div></>:""
        }
         
        <button style={{display:signuphide}} className='signup_nav'

        onClick={()=>{

            setlogindisplay(false)
            setsignupdisplay(true)

        }}>Sign up</button>

        <button style={{display:loginhide}} className='login_nav' 

          onClick={()=>{

            setsignupdisplay(false)
            setlogindisplay(true)
           
        }}>Login</button>

        <p className="username">{username}</p>

        <button style={{display:logouthide}} className='logout_nav' 

          onClick={()=>{

            localStorage.removeItem('token')
            window.location.reload()
            setlogouthide("none")
           
        }}>Logout</button>
     </div>
     {

     (signupDisplay)?<Signup handlesignupdisplay={handlesignupdisplay} handlesignup={handlesignup} handlelogin={handlelogin}></Signup>:""
    

  }
  {

     (loginDisplay)?<Login  handlesignupdisplay={handlesignupdisplay} handlelogindisplay={handlelogindisplay}  handlesignup={handlesignup} handlelogin={handlelogin} handleusername={handleusername} handlelogoutdisplay={handlelogoutdisplay}></Login>:""
  
  }  
    </>
  )
}

export default Navbar
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export const  Datacontext = createContext() 

export function Datacontexts({children}){
  const [data,setdata] = useState([])
   
  useEffect(()=>{
      handledata()
  },[])
  function handledata()
  {
   
      axios.get("http://localhost:8080/getallpost").then((res)=>{
          if(res.data)
          {
              //console.log(res.data)
              setdata(res.data)
          }
      }).catch((err)=>{
          console.log(err.message)
      })
  
  }
  return (<>
   <Datacontext.Provider value={{data,handledata}}>
       {children}
   </Datacontext.Provider>
  </>)
}


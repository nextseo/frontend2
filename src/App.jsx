import React, { useEffect, useState } from 'react'

function App() {
  const [users, setUser]=useState([])

  const fetchData = async()=>{
    const fetchData_user = await fetch(`${import.meta.env.VITE_APP_API}/users`)
    .then(res=> res.json())
    .then(data=>{
      setUser(data)
    })

  }

  useEffect(()=>{
    fetchData()

  },[])
  return (
    <div>
      sss ssssssssssssdddddddddd1233123132132
    <ul>
    {
      
        users.map((item, index)=>{
          return(
            <li key={index}>id : {item.id} || lname :{item.fname}</li>
          )
          
        })
      }
    </ul>
    </div>
  )
}

export default App
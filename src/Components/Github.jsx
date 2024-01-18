import React, { useEffect, useState } from 'react'

function Github() {
    let [data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then((res)=> res.json())
        .then((res)=> setdata(res.followers) )
    },[])
  return (
    <div>
      <h1>Githun Followers:{data}</h1>
    </div>
  )
}

export default Github

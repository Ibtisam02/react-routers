import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let {user}=useParams()
  return (
   <div>
    user:{user}
   </div>
  )
}

export default User

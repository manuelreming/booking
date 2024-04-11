import React, { useState } from 'react'

const UserLogged = ({setUser, user}) => {
    
    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser();
    }
  return (
    <div>
      <article>

        <header>
           <img src={user.gender==='female'?'/usuaria.png'
           :'/usuario.png'} alt="" />
        </header>
        <h2>
            {user.firstName} {user.lastName}
        </h2>

        <button onClick={handleLogout}>Logout</button>
      </article>
    </div>
  )
}

export default UserLogged

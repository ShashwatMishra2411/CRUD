import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function List({users, setRender, render}) {
    
    const [list, setList] = useState([]);    

    async function handleDelete(e){
      // console.log()
      let id = e.target.id
      axios.delete(`http://localhost:5000/users/delete/${id}`).then(()=>console.log("Success")).catch((err)=>console.log(err.message))
      setRender(!render);
    }

    async function handleUpdate(e){
      console.log(e)
      axios.delete(`http://localhost:5000/users/delete/${id}`)
    }
    useEffect(()=>{
        setList(users.map((user)=>{
            return(<li className='' key={user._id}>
                <span>User: {user.username}</span>
                <span>Password: {user.password}</span>
                <button id={user._id} onClick = {handleUpdate}>Update</button>
                <button id={user._id} onClick = {handleDelete}>Delete</button>
            </li>)
        }))
    }, [users])
  return (
    <div>
      {list}
    </div>
  )
}

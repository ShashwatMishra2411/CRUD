import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import List from './List'

export default function App() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);


  useEffect(()=>{
    const fetch = async ()=>{
        const res = await axios.get('http://localhost:5000/users');
        setUsers(res.data);
        console.log(render)
        console.log(res.data)
    }
    fetch();    
}, [render])

  async function handleSubmit(e){
    e.preventDefault();
    // console.log(name,pass);
    axios.post('http://localhost:5000/users/create', {name:name, password:pass}).then(()=>console.log("Success")).catch((err)=>console.log(err.message))
    setRender(!render);
    // console.log(render)
    // fetch();
  }
  return (
    <div>
      <div className="enter">
        <form action="" className='form' onSubmit={handleSubmit}>
          <label htmlFor="n">Name:</label>
        <input type="text" className="name" value={name} onChange={(e)=>{setName(e.target.value)}} id='n'/>
        <label htmlFor="p">Password:</label>       
        <input type="text" className="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} id='p'/>
        <button type='submit'>Add</button>
        </form>
        <List users = {users} render = {render} setRender = {setRender}/>
      </div>
    </div>
  )
}

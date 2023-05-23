import React from 'react'
import {useState, useEffect} from 'react'
function Kamble(){
  const storage=JSON.parse(localStorage.getItem('seema')) || []
  const [user,setUser]=useState(storage)
  const [search,setSearch]=useState('')
  const[store,setStore]=useState('')
  const [table,setTable]=useState([])
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
  });
  function myfun(e){
setData({...data,[e.target.name]:e.target.value})
  }
  function handle(){
    // e.perventDefault();
    setUser([...user,data])
    setData({name:"",email:"",password:""})
    localStorage.setItem('seema', JSON.stringify(user))
  }
  function deleteitem(index){
    user.splice(index,1)
    setStore(!store)
  }
  function searching(e){
    setSearch(e.target.value)
    const see=user.filter((set=>set.name.includes(e.target.value)))
  setTable(see)
}
useEffect (()=>{
setTable(user)
},[user])
console.log(search,"search")
  return(
    <div>
      <label>Search:</label>
      <input type="search" value={search} onChange={searching}/>
      <input type="text" name="name" value={user.name}onChange={myfun}/>
      <input type="email" name="email" value={user.email}onChange={myfun}/>
      <input type="password" name="password" value={user.password}onChange={myfun}/>
      <button onClick={handle}>submit</button>
      <table border="1">
        <thead>
        
          <tr>
            <th>Name </th>
            <th>Email </th>
            <th>Password </th>
            <th>Delete</th>
            <th>Search</th>
          </tr>
        </thead>
     

      {
        table.map((item,index)=>{
          return(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button onClick={()=>deleteitem(index)}>DeletItem</button></td>
              <td><button onClick={()=>search(see)}>Search </button></td>
            </tr>
          )
        })
      }
       </table>
    </div>
  );
}
export default Kamble
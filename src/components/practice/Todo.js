import React,{useState} from 'react';
const Todo=()=>{
  const [data,setData]=useState('')
  const [input,setInput]=useState([])
  const [render,setRender]=useState(true)
  const [change,setChange]=useState(true)
  const handlechange=(e)=>{
    setData(e.target.value)
  }
  const handleclick=()=>{
    if(data!=='')
    setInput([...input,data])
    setData('')
  }
  const deleteitem=(index)=>{
    const value=input;
    value.splice(index,1)
    setRender(!render)
  }
  const edit=(updateitem)=>{
    setData(updateitem)
    setChange(false)
    console.log(updateitem,"updateitem")
  }
  const updatefun=(e)=>{
e.preventDefault();

input.forEach((item,index)=>{
  if(input==item) data[index]=input;
})
setChange(true)
setRender(false)
  }
  console.log(data,"data")
  console.log(input,"input")
  return(
    <div>
       <input type="text" value={data}  onChange={handlechange}/>
        { change ? (
       <button onClick={handleclick}>Add</button>
        ) : (
       <button onClick={updatefun} >Update</button>
        )}
       {
         input.map((item,index)=>{
           return(
             <div>
               {item}
               <button onClick={()=>deleteitem(index)}>Delete</button>
               <button onClick={()=>edit(item)}>Edit</button>
             </div>
           )
         })
       }
    </div>
  );
}
export default Todo;
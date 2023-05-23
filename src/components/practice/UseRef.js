import React,{useState,useRef} from 'react'
const UseRef=()=>{
  const refelememt=useRef('')
  const [name,setName]=useState("seema")
  console.log(refelememt,"useref")
 const handle=()=>{
   setName("")
   refelememt.current.focus()
 }
 const handleinput=()=>{
  refelememt.current.style.color="blue"
 }

  
  return(
    <div> 
     <input ref={refelememt} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     <button onClick={handle}>clickme </button>
     <button onClick={handleinput}> input</button>
    </div>
  );
}
export default UseRef;
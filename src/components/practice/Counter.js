import React,{useState} from 'react'
const Counter=()=>{
  const [count,setCount]=useState(0)
  return(
   <div>
  <h3>count:{count}</h3>
   <button onClick={()=>setCount(count+1)}>Increment</button>
   <button onClick={()=>setCount(count-1)}>Decrement</button>
   {/* {
     count ==0 ?(
       <p>count is empty</p>
     ):(
       <p>count is not empty</p>
     )
   } */}
  { count ===0 ?
   <p>count is empty</p>:<p>count is not empty</p>
  }
    </div>
  );
}
export default  Counter;
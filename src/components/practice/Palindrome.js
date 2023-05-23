import React from 'react'
import {useState} from 'react'
const palindrome=()=>{
  const[input,setInput]=useState('')
  const [result,setResult]=useState('')
  function palin(){
    let rev=[];
    for (let i of input){
      rev.unshift(i);
    }
    let res =input==rev.join('')? " is palindrome" : " not palindrome";
    setResult(res)
  }
  return(
    <div>
     
  <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}/>
  <button onClick={palin}>click me</button>
  <h3>value:{input}{result}</h3>
  

    </div>
  );
}
export default palindrome;
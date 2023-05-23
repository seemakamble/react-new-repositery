import React,{useState} from 'react'
import Button from './Button'
function Count(){
const [data,setdata]=useState(0)
const [mul,setMul]=useState(0)
  function add(){
    setdata(data+1)
  }
  // function add(){
  //   setMul(mul*2)
  // }
  return(
    <div>
<h2>count{data}</h2>
<h3>multiply:{mul}</h3>
<Button add={add} title={"seema"} color="purple"/>
<Button add={()=>{alert('wellcome gulbarga')}} title={"anything"} color="#888"/>
<Button add={()=>{alert('this is another button')}} title={"onemore"} color="#6879f0"/>
{/* <Button add={add} title={"multiply"}/> */}
</div>
  );
  }
export  default Count;
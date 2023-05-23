import React,{useState} from 'react';
const Subarray=()=>{
const [value,setValue]=useState('')
const [ result , setResult] = useState([])

function myfun(inputvalue){
  const numbers=[1,2,4,8,16,32,64,128,256,512];
  const res = []
  const lm =  numbers.reverse()
  lm.map(item=>{
    if(item <= inputvalue){
     inputvalue-=item
      res.push(item)
    }
  })
  setResult(res.join(' + '))
  
}
console.log(result,"res")
console.log(value,"value")

  return(
    <div>
   <input type="number"  onChange={event=>setValue(event.target.value)} value={value}/>
   <button onClick={()=>myfun(value)}>Add </button>
   <button onClick={()=>setValue('')}>Clear</button>
   <h4>{result} = {value}</h4>

    </div>
  );
  }
export default Subarray;


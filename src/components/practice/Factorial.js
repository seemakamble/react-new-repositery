import React,{useState} from 'react'
const Factorial =()=>{
  const [input,setInput]=useState('')
  const [result,setResult]=useState('')
  const submithandler=(e)=>{
    e.preventDefault();
    factorial(input)
    setResult(out);
    setInput("")

  };
  let out=factorial(input)
  function factorial(n){
    var data=1;
    if(n==1){
      return data;
}else if( n>1 ){
  for(var i=n; i<=n; i++){
    console.log(data,"data")
    data =data *i;
  }
  return data;
  }else {
    return 'number has to be positive';
  }
 }
  
 
  return(
    <div>
   <form onSubmit={submithandler}>
     <div>
       <label>Enter the number:</label>
       <div>
         <input type="number" name="input" value={input} placeholder="enter the number to find factorial" onChange={(e)=>setInput(e.target.value)} />
       </div>
       <div>
        <input type="submit" value="submit"/>
       </div>

<h1>Result:{result}</h1>
    
     </div>
   </form>
    </div>
  );
}
export default Factorial;
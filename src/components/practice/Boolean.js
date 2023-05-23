import React,{useState} from 'react'
function Boolean(){
  const [set,setSet]=useState(true)
  function myfun(){
     setSet(!set)
  
    // if(5<2){
    //   alert("print")
    // }else{
    //   alert("pushpa")
    // }
  }
  return(
    <div>
      <h4>{set}</h4>
  <button onClick={myfun}>button</button>
  <div>{set?"this is true":"this is false"} </div>
    </div>
  );
}
export default Boolean;
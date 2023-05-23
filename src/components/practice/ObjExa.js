import React,{useState} from 'react';
function ObjExa(){
  const [obj,setObj]=useState({
    name:"seema",role:"ui",id:23,
  });
  function button(){
    setObj({...obj, name :"pushpa", id :99})
  }
  return(
    <div>
<h4>{obj.name} {obj.role} {obj.id} </h4>
<button onClick={button}>object</button>
    </div>
  );
}

export default ObjExa;

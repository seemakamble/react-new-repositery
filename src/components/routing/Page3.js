import React from 'react';
import { useParams } from 'react-router-dom'
const Page3 =()=>{
  const get=useParams();
  console.log(get,55)
  console.log(JSON.parse(get.obj));
  return(
<div>
  <h3>this is page3</h3>
  <h3>objects:{get.obj} </h3>
  {/* <h3>params:{get.obj}</h3> */}

</div>
  );
}
export default Page3
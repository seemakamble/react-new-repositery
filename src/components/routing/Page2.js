import React from 'react';
import { useParams} from 'react-router-dom'
function Page2(){
  const recievedata=useParams();
  console.log(recievedata,"555")
  return(
    <div>
      <h2>page2</h2>
      <h3>params2:{recievedata.obj1}</h3>
    </div>
  );
}
export default Page2;
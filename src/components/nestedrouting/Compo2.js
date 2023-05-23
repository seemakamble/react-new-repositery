import React from 'react';
import {Link,Outlet} from 'react-router-dom'
function Compo2(){
  return(
    <div>
   <h3>Iam the component two</h3>
   <div>
     <Link to="compo3">go to component three</Link>
   </div>
   <div>
     <Outlet/>
   </div>
    </div>
  );
}
export default Compo2;
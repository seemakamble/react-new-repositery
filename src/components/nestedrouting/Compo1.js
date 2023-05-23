import React from 'react'
import {Link,Outlet} from 'react-router-dom';
function Compo1(){
  return(
    <div>
  <h3>Iam comoponent one</h3>
  <div>
    <Link to="compo2">go to component two</Link>
  </div>
  <div>
    <Outlet/>
  </div>
    </div>
  );
}
export default Compo1;
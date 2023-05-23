import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
function Spin()
{
 return (
   <div>
    
     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>&nbsp;&nbsp;&nbsp;
   <Spinner animation="grow"  variant="primary"/>
   <Spinner animation="border" role="status" size="large" variant="danger"/>
   <Spinner animation="grow"  variant="info"/>
   <button variant="success" disabled>
     <Spinner animation="border" role="status" aria-hidden="true"  />
  </button>  

   </div>
 );
}
export default Spin;

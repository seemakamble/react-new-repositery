import React from 'react'
function Button(props){
  return(
    <div>
    <button style={{color:props.color,fontSize:'26px',margin:'10px'}} onClick={props.add}>{props.title}</button>
    </div>
  );
}
export default Button;
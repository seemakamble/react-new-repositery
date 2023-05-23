import React from 'react'
import {useState,useEffect} from 'react'
function  Calculater(){
  return(
    <div>
  <div>
  <button onClick={()=>handleclick(1)}>1</button>
  <button onClick={()=>handleclick(2)}>2</button>
  <button onClick={()=>handleclick(3)}>3</button>
  </div>
  <div>
  <button onClick={()=>handleclick(4)}>4</button>
  <button onClick={()=>handleclick(5)}>5</button>
  <button onClick={()=>handleclick(6)}>6</button>
  </div>
  <div>
  <button onClick={()=>handleclick(7)}>7</button>
  <button onClick={()=>handleclick(8)}>8</button>
  <button onClick={()=>handleclick(9)}>9</button>
  </div>
  <button onClick={()=>handlefun('-')} disabled={disable}>-</button>
  <button onClick={()=>handlefun('+')} disabled={disable}>+</button>
  <button onClick={()=>handlefun(0)} disabled={disable}>0</button>
  <button onClick={()=>handlefun('/')} disabled={disable}>/</button>
  <button onClick={()=>handlefun('*')} disabled={disable}>*</button>
  <button onClick={()=>handleresult}>=</button>
  <button onClick={()=>reset}>Reset</button>
    </div>
  );
}
export default Calculater;
import React from 'react';
import { useState, createContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const UserContext = createContext();
function NestedForm() {
  const [data, setData] = useState('');
  const [val, setVal] = useState('');
  return (
    <UserContext.Provider value={val}>
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={() => setVal(data)}>click me</button>
        <h3>{val}</h3>
        <div>
          <Compo1 />
          <Link to="compo1">go to component1</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
}
export default NestedForm;

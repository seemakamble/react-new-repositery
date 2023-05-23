import React from 'react';
import { useState } from 'react';
function Exiest() {
  // const storage = JSON.parse(localStorage.getItem('var1')) || []
  const [user, setuser] = useState([]);
  const [data, setdata] = useState('');

  function myfun(e) {
    setdata(e.target.value);
  }
  function handle(e) {
    e.preventDefault();
    let isNew = true;
    setdata('');
    user.forEach((val) => {
      if (val == data) {
        isNew = false;
      }
    });
    if (isNew) {
      setuser([...user, data]);
    } else {
      alert('Its alrdy exist');
    }

    // localStorage.setItem('var1', JSON.stringify(user));
  }

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="enter your email"
        value={data}
        onChange={myfun}
      />
      <button onClick={handle}>click me</button>

      {user.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
}
export default Exiest;

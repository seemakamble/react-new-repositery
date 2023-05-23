import React, { useState } from 'react';
const AddForm = () => {
  const [name, setName] = useState('');
  const [input, setInput] = useState([]);
  const handlechange = (e) => {
    setName(e.target.value);
  };
  const myfun = () => {
    setInput((input) => {
      const list = [...input, name];
      console.log(list, 'list');
      setName('');
      return list;
    });
  };
  console.log(input, 'input');
  console.log(name, 'name');
  return (
    <div>
      <h4>{input}</h4>
      <div>
        <input type="text" name="name" value={name} onChange={handlechange} />
      </div>
      <div>
        <button onClick={myfun}>clickme</button>
      </div>
    </div>
  );
};
export default AddForm;

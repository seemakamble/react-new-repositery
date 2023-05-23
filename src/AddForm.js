import React from 'react';
import { useState, useEffect } from 'react';
function AddForm() {
  const storage = JSON.parse(localStorage.getItem('var1')) || [];
  const [store, setstore] = useState(true);
  const [search, setSearch] = useState('');
  const [table, settable] = useState([]);
  const [change, setChange] = useState(true);
  const [data, setdata] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [user, setuser] = useState(storage);
  function myfun(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function handleclick(e) {
    e.preventDefault();
    setuser([...user, data]);
    setdata({ name: '', email: '', password: '' });
    console.log(user, '13');
  }
  localStorage.setItem('var1', JSON.stringify(user));
  function delItem(index) {
    user.splice(index, 1);
    setstore(!store);
    localStorage.setItem('var1', JSON.stringify(user));
  }
  function Editfun(updateitem) {
    setdata(updateitem);
    console.log(updateitem, '33');
    setChange(false);
  }
  function searching(e) {
    setSearch(e.target.value);
    const see = user.filter((set) => set.name.includes(e.target.value));
    settable(see);
    console.log(see, 38);
  }
  useEffect(() => {
    settable(user);
    console.log(user, 'useeffectuser');
    console.log(table, 'table');
  }, [user]);
  function update(e) {
    e.preventDefault();

    user.forEach((item, index) => {
      if (item.email == data.email) user[index] = data;
    });
    localStorage.setItem('var1', JSON.stringify(user));
    setChange(true);
  }
  return (
    <div>
      <label>Search:</label>
      <input
        className="search-input"
        type="text"
        name="search"
        value={search}
        placeholder="serach"
        onChange={searching}
      />
      <form>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={myfun}
          placeholder="enter your name"
        />
        <br />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={myfun}
          placeholder="enter your email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={myfun}
          placeholder="enter your password"
        />
        <br />
        <br />
        {change ? (
          <button className="submit-input" onClick={handleclick}>
            Submit
          </button>
        ) : (
          <button onClick={update}>update</button>
        )}
      
      </form>
      {/* <h2>Name:{user.name}</h2>
     <h2>email:{data.email}</h2>
     <h2>password:{data.password}</h2> */}
      {table?.length && (
        <table border="1" className="table-input">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>DelItem</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => delItem(index)}
                    >
                      delItem
                    </button>
                  </td>
                  <td>
                    <button
                      className="update-button"
                      onClick={() => Editfun(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default AddForm;

import { Link } from 'react-router-dom';
import React from 'react';
function Nav() {
  const object = { name: 'kavita', role: 'ui', age: '24' };
  return (
    <div className="nav-link">
      <ul>
        <li>
          <Link to="addfrom">AddForm</Link>
        </li>
        <li>
          <Link to="page1">Go to page1 </Link>
        </li>
        <li>
          <Link to="page2/rupini">Go to page2 </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={`page3/${JSON.stringify(object)}`}>UseParams</Link>
        </li>
        <li>
          <Link to="palindrome">Palindrome </Link>
        </li>
        <li>
          {' '}
          <Link to="page1">Routing</Link>
        </li>
        <li>
          {' '}
          <Link to="count">ReusableComponent</Link>
        </li>
        <li>
          <Link to="reduxexample">Redux</Link>{' '}
        </li>
        <li>
          <Link to="calculater">Calculater</Link>{' '}
        </li>
        {/* <li><Link to="login">Login </Link></li> */}
        <li>
          <Link to="kamble">signup</Link>{' '}
        </li>
        <li>
          <Link to="spin">Spin</Link>
        </li>
        <li>
          <Link to="home">Home Page</Link>
        </li>
        <li>
          <Link to="signup">SignUp page</Link>
        </li>
        <li>
          <Link to="login ">login page</Link>
        </li>
        <li>
          <Link to="compo1">Nested Component</Link>
        </li>
        <li>
          {' '}
          <Link to="nestedform">go to nested frm </Link>
        </li>
        <li>
          <Link to="wellcome">Wellcome Page</Link>{' '}
        </li>
        <li>
          <Link to="regmain">RegMain Page</Link>{' '}
        </li>
        <li>
          <Link to="example">Example</Link>
        </li>
        <li>
          <Link to="boolean">Condition</Link>{' '}
        </li>
        <li>
          <Link to="todo">Todo List </Link>{' '}
        </li>
        <li>
          <Link to="valid">Validation</Link>
        </li>
        <li>
          <Link to="useref">Use Ref</Link>
        </li>
        <li>
          <Link to="dynamicrouting">Dynamic Routing </Link>
        </li>
        <li>
          <Link to="newmethod">New Method</Link>
        </li>
        <li>
          <Link to="subarray">Sub Array Method</Link>
        </li>
        <li>
          <Link to="factorial">Factorial</Link>{' '}
        </li>

         <li>
          <Link to="compo2">Nested Component</Link>
        </li> 
        <li>
          <Link to="compo3">Nested Component</Link>
        </li>
        <li><Link to="counter">Counter</Link></li>
        <li><Link to="CreateContext">CreateContext</Link></li>
      </ul>
    </div>
  );
}
export default Nav;

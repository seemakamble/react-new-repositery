import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './style.css';
import AddForm from './AddForm';
import Count from './components/Count';
import Nav from './components/Nav';
import Exiest from './components/Exiest';
import Page1 from './components/routing/Page1';
import Page2 from './components/routing/Page2';
import Page3 from './components/routing/Page3';
import Palindrome from './components/practice/Palindrome';
// import Login from './components/practice/Login';
import ReduxExample from './components/redux/ReduxExample';
import Home from './components/Home1';
import Calculater from './components/practice/Calculater';
import Kamble from './components/practice/Kamble';
import Spin from './components/practice/Spin';
import Wellcome from './components/registration/Wellcome';
import RegSignUp from './components/registration/RegSignUp';
import RegLogin from './components/registration/RegLogin';
import Compo1 from './components/nestedrouting/Compo1';
import Compo2 from './components/nestedrouting/Compo2';
import Compo3 from './components/nestedrouting/Compo3';
import NestedForm from './components/nestedrouting/NestedForm';
import RegMain from './components/registration/Index';
import Valid from './components/practice/Valid';
import ObjExa from './components/practice/ObjExa';
import Boolean from './components/practice/Boolean';
import Todo from './components/practice/Todo';
import UseRef from './components/practice/UseRef';
import DynamicRouting from './components/practice/DynamicRouting';
import NewMethod from './components/practice/NewMethod';
import Subarray from './components/practice/Subarray';
import Factorial from './components/practice/Factorial';
import Counter from './components/practice/Counter';
import CreateContext from './components/practice/CreateContext';
export default function App() {
  return (
    <div>
       <Nav />
      {/* <Home />
      <Valid/>  */}

      <Link to="nestedform">go to nested frm </Link>
      <Routes>
        <Route path="addfrom" element={<AddForm />} />
        <Route path="count" element={<Count />} />
        <Route path="page3/:obj" element={<Page3 />} />
        <Route path="palindrome" element={<Palindrome />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="Page2/:obj1" element={<Page2 />} />
        <Route path="count" element={<Count />} />
        <Route path="reduxexample" element={<ReduxExample />} />
        <Route path="calculater" element={<Calculater />} />
        {/* <Route path="login" element={<Login/>}/> */}
        <Route path="kamble" element={<Kamble />} />
        <Route path="spin" element={<Spin />} />
        <Route path="wellcome" element={<Wellcome />} />
        <Route path="login" element={<RegLogin />} />
        <Route path="signup" element={<RegSignUp />} />
        <Route path="compo1" element={<Compo1 />}>
          <Route path="compo2" element={<Compo2 />}>
            <Route path="nestedform" element={<NestedForm />}>
              <Route path="compo3" element={<Compo3 />} />
            </Route>
          </Route>
        </Route>

        <Route path="regmain" element={<RegMain />} />
        <Route path="example" element={<ObjExa />} />
        <Route path="boolean" element={<Boolean />} />
        <Route path="todo" element={<Todo />} />
        <Route path="valid" element={<Valid />} />
        <Route path="useref" element={<UseRef />} />
        <Route path="dynamicrouting/:pageid" element={<DynamicRouting />} />
        <Route path="newmethod" element={<NewMethod />} />
        <Route path="subarray" element={<Subarray />} />
        <Route path="factorial" element={<Factorial />} />
        <Route path="counter" element={<Counter/>}/>
        <Route path="CreateContext" element={<CreateContext/>}/>
      </Routes>
    </div>
  );
}

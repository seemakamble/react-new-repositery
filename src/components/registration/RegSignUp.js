import React from 'react';
import {useState,useEffect} from 'react'
import {Action} from './Action';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';


const RegSignUP=()=>{
  const [details,setDetails]=useState({
    fname:"",
    mobile:"",
    email:"",
    password:"",
  })
  const [checkObj, setCheckObj] = useState({
    email: false,
    mobile: false,
    username: false,
    password: false,
  });
  const users = useSelector((state) => state.users);
  const [user,setUser]=useState({})
  const [errors,setErrors]=useState({})
  const [dispatch,useDisptch]=useState()
  const handlechange = (e) => {
  const { name, value } = e.target;
  const emailpattern=/^[A-z][A-z0-9]+@[A-z0-9]+(?:[.][a-z]{2,})$/;
  const mobilepattern=/^[0-9]{10}$/;
  const psdpattern=  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-_+]).{8,}$/;

  switch (name) {
    case 'email':
      errors.email = '';
      if (value.match(emailpattern)) {
        // console.log(
        //   users.find((user) => user.email === value),
        //   'check 42'
        // );
        if (users.find((user) => user.email === value)) {
          errors.email = 'Try New Email Id';
          setCheckObj({ ...checkObj, email: false });
        } else {
          setCheckObj({ ...checkObj, email: true });
        }
      } else {
        errors.email = 'Enter Valid Email';
        setCheckObj({ ...checkObj, email: false });
      }
      break;
    case 'mobile':
      errors.mobile = !value.match(mobilepattern)
        ? 'Enter Valid Mobile Number'
        : '';

      value.match(mobilepattern)
        ? setCheckObj({ ...checkObj, mobile: true })
        : setCheckObj({ ...checkObj, mobile: false });
      break;
    case 'username':
      errors.username = value.length < 2 ? 'Name Required' : '';
      value.length < 2
        ? setCheckObj({ ...checkObj, username: false })
        : setCheckObj({ ...checkObj, username: true });
      break;
    case 'password':
      errors.password = value.match(psdpattern)
        ? ''
        : 'one uppercase, lowercase, digit, minimum 8 characters required';
      value.match(psdpattern)
        ? setCheckObj({ ...checkObj, password: true })
        : setCheckObj({ ...checkObj, password: false });
      break;
    default:
      return;
  }
  setErrors({ ...errors, [name]: errors[name] });
  setDetails({ ...details, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Hii ${details.username}, Account Created Sucessfully `);
  dispatch(RegSignUp(details));
  navigate('/login');
};

  const navigate=useNavigate()
  const handleclick=(e)=>{
    e.preventDefault();
    navigate('/login')
   setUser(users)
    setDetails({fname:"",mobile:"",email:"",password:""})
  }
  console.log(user,"user")
  return(
    <div>
   <form>

    <div> <input type="text" name="fame" onChange={handlechange} value={details.name}/></div>
    <div> <input type="number" name="mobile" onChange={handlechange} value={details.mobile}/></div>
     <div><input type="email" name="email" onChange={handlechange} value={details.email}/></div>
     <input type="password" name="password" onChange={handlechange} value={details.password}/>
     <button onClick={handleclick}  >Submit</button>
   </form>
   {/* <h4>{user.name}</h4>
   <h4>{user.email}</h4>
   <h4>{user.mobile}</h4>
   <h4>{user.password}</h4> */}
   
    </div>
  );
}
export default RegSignUP;
import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import logo from "../assets/images/lutrics-eye-logo.png"
import FormRow from '../components/FormRow'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {loginUser, registerUser} from '../features/user/userSlice'


const initialState = {
  name:'',
  email: '',
  password: '',
  isMember: true
}
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const {user, isLoading}= useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleChange=(e)=>{
    const name =  e.target.name;
    const value= e.target.value
    // console.log(`${name}: ${value}`);
    setValues({...values, [name]: value})
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    const {name,email,password,isMember} = values;
    if(!email || !password || (!isMember && !name)){
      toast.error('Please fill out All fields');
      return;
    }else{
      toast.success('login successful')
      navigate('/dashboard');
    }

    if(isMember){
      dispatch(loginUser({ email: email, password: password}))
      

      return;
    }
    dispatch(registerUser({name, email, password}))
  }


  const toggleMember =()=>{
    setValues({...values, isMember: !values.isMember})
  }
  return (

   <Wrapper className='full-page'>

    <form className='form' onSubmit={onSubmit}>
    <div className='header'>
          <img src={logo} alt='logo' className='logo' style={{width: '30%'}} />
          </div>
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
          {
            !values.isMember && (

              <FormRow 
              type='text'
              name='name'
              value={values.name}
              handleChange={handleChange}
              />
              
              )
            }
          <FormRow 
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          />

          <FormRow 
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          />
          <button className='btn btn-block' type='submit'>Submit</button>
          <p>
           {values.isMember ? 'Not yet registered?' : 'Already registered'} 
           <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}</button>
          </p>
    </form>
   </Wrapper>
  )
}

export default Register

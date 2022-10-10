import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import logo from "../assets/images/logo.png"


const initialState = {
  name:'',
  email: '',
  password: '',
  isMember: true
}
const Register = () => {
  const handleChange=(e)=>{
    console.log(e.target);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target)
  }
  const [value, setValue] = useState(initialState);
  return (

   <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmit}>
    <div className='header'>
          <img src={logo} alt='logo' className='logo' style={{width: '30%'}} />
          </div>
          <h3>Login</h3>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>Email</label>
            <input type='text'
            className='form-input'
            name='name'
            value={value}
            onChange={handleChange}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>password</label>
            <input type='text'
            className='form-input'
            />
          </div>

          <button className='' type='submit'></button>
    </form>
   </Wrapper>
  )
}

export default Register

import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Signup = () => {
    const [error,setError]=useState(null);
    const {createUser}=useContext(AuthContext)

    const navigate=useNavigate();
    const location=useLocation();
    const from =location.state?.from?.pathname || '/';
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirmPassword=form.confirm.value;
        if(password.length < 6){
            setError('Your password should be 6 chatacters long');
            return;
          }

        if(password !== confirmPassword){
            setError('Your Password did not match');
            return;
        }


    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      form.reset();
      navigate(from,{replace:true});
    })
    .catch(error=>console.error(error));
      }


    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' required/>
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' required/>
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm Password</label>
                <input type='password' name='confirm' required/>
            </div>
            <input type='submit' className='btn-submit' value='Signup'/>
        </form>
        <p>Already have any Account<Link to='/login'>Login</Link></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default Signup;
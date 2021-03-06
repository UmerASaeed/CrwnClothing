import React,{ useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from "react-redux"
import {signUpStart} from "../../redux/user/user.action"
import './sign-up.styles.scss'

const SignUp = ({signUpStart}) =>
{
    const [userCredentials,setCredentials] = useState({displayName:"",email:"",password:"",confirmPassword:""})

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=userCredentials
        if (password!==confirmPassword)
        {
            alert ("Password don't match");
            return;
        }

        let UserData={
            displayName, 
            email,
            password
        }
        
        signUpStart(UserData)
    }
    
    const handleChange = event => {
       const {name,value}=event.target;
       setCredentials({...userCredentials,[name]:value})
    }

    const {displayName,email,password,confirmPassword}=userCredentials;
    return(
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
        
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput type='text' name="displayName" value={displayName} onChange={handleChange} label="Display Name" required />
                <FormInput type='email' name="email" value={email} onChange={handleChange} label="Email" required />
                <FormInput type='password' name="password" value={password} onChange={handleChange} label="Password" required />
                <FormInput type='password' name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );   
}

const mapDispatchToProps = dispatch => {
    return{
        signUpStart:(UserData)=>dispatch(signUpStart(UserData))
    }
}
export default connect(null,mapDispatchToProps)(SignUp);
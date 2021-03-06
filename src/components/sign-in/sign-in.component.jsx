import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux'
import {googleSignInStart,emailSignInStart} from "../../redux/user/user.action"

const Signin = ({googleSignInStart,emailSignInStart}) =>
{
    const [ userCredentials,setCredentials ] = useState({email:"",password:""})

    const handleSubmit = async (event)=>
    {
        event.preventDefault();
        const {email,password} = userCredentials
        let emailAndPassword = {
            email,
            password
        }
        emailSignInStart(emailAndPassword)
    }

    const handleChange=(event)=>
    {
        const {value,name}=event.target
        setCredentials({...userCredentials,[name]:value})
    }

    
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type='email' value={userCredentials.email} label='Email' handleChange={handleChange} required/>
                <FormInput name="password" type='password' value={userCredentials.password} label='Password' handleChange={handleChange} required/>
                <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} googleSignIn='googleSignIn'> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
    
}    


const mapDispatchToProps = dispatch =>
{
    return{
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(emailAndPassword)=>dispatch(emailSignInStart(emailAndPassword))
    }
}

export default connect(null,mapDispatchToProps)(Signin);
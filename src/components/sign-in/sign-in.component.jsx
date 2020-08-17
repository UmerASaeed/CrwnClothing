import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component';

class Signin extends React.Component
{
    constructor()
    {
        super();
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=(event)=>
    {
        event.preventDefault();
        this.setState({email:"",password:""})
    }

    handleChange=(event)=>
    {
        const {value,name}=event.target
        this.setState({[name]:value})
    }

    render()
    {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required/>
                    <FormInput name="password" type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required/>
                    <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin;
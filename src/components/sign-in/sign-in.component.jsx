import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux'
import {googleSignInStart,emailSignInStart} from "../../redux/user/user.action"

class Signin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=async (event)=>
    {
        event.preventDefault();
        const {email,password} = this.state;
        const {emailSignInStart} = this.props
        let emailAndPassword = {
            email,
            password
        }
        emailSignInStart(emailAndPassword)
    }

    handleChange=(event)=>
    {
        const {value,name}=event.target
        this.setState({[name]:value})
    }

    render()
    {
        const {googleSignInStart} = this.props
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required/>
                    <FormInput name="password" type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} googleSignIn='googleSignIn'> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
{
    return{
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(emailAndPassword)=>dispatch(emailSignInStart(emailAndPassword))
    }
}

export default connect(null,mapDispatchToProps)(Signin);
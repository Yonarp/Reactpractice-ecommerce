import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form.input.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sing-in.styles.scss';

class SignIn extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            email: '' ,
            password: '',
        }
    }

    handleSubmit = event => {

        event.preventDefault();

        this.setState({ email: '' , password: '' ,})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState( { [name]: value })

    }

    render()
    {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your current email and password</span>

                <form onSubmit= {this.handleSubmit}>
                    <FormInput type="email" name='email' handleChange={this.handleChange} value={this.state.email} required  label= 'Email'/>
                  
                    <FormInput type="password" name='password' handleChange={this.handleChange} value={this.state.password} required label= 'Password' />
        
                    <CustomButton type="submit">Sign up</CustomButton>
                    <CustomButton onClick = {signInWithGoogle}>Sign In with google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
import React from 'react';

import './sign-up.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form.input.component';
import {auth,createUserProfile} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Passwords Dont Match');
            return
        } 

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfile(user, {displayName});

        }catch(error){
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
    
            })
            console.error(error);
        }


    }

    handleChange = e => {
        const {name , value } = e.target;
        
        this.setState({[name]: value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h1 className="title">I Do Not Have An Account</h1>
                <span>Sign up with email and password</span>
                <form className='sing-up-from' onSubmit={this.handleSubmit}>
                    <FormInput
                    type = 'text'
                    name = 'displayName'
                    handleChange= {this.handleChange}
                    value = {displayName}
                    required
                    label = 'User Name'
                    />
                    
                    
                    <FormInput
                    type = 'email'
                    name = 'email'
                    value = {email}
                    handleChange= {this.handleChange}
                    required
                    label = 'E-mail'
                    />
                    
                    <FormInput
                    type = 'password'
                    name = 'password'
                    value = {password}
                    handleChange= {this.handleChange}
                    label = 'Password'
                    required
                    />

                    <FormInput
                    type = 'password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    handleChange= {this.handleChange}
                    label = 'Confirm Password'
                    required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp; 
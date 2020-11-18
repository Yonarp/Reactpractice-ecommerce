import React from 'react';

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
                    <input type="email" name='email' onChange={this.handleChange} value={this.state.email} required  />
                    <label>Email</label>
                    <input type="password" name='password' onChange={this.handleChange} value={this.state.password} required   />
                    <label>password</label>
                    <input type="submit" value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;
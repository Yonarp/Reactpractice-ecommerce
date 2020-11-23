import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';
import './sign-in-and-register.styles.scss';

const SignInAndRegister = () =>(
<div className="sign-in-and-regester">
    <SignIn/>
    <SignUp/>

</div>
)

export default SignInAndRegister;
import React, {useState} from "react";
import {signInWithGoogle, signInWithEmailAndPassword} from '../../firebase/firebase.utils';

import FormInput from "../form-input/formInput.cpnt";
import CustomButton from "../custom-button/custom-button";
import {STYLE_GOOGLE} from '../custom-button/custom-button.styles';
import "./sign-in.scss";

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(email, password);
        } catch (error) {
            setErrorMessage(error.message);
            setTimeout(()=> setErrorMessage(''), 5000)
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name]: value  });
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
        
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type="email" 
                    value={email} 
                    required 
                    label="Email"
                    handleChange={handleChange}/>
                <FormInput 
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    required
                    label="Password"/>
                <p className="error">{errorMessage ? errorMessage : '' }</p>
                <div className='buttons'>
                    <CustomButton>Sign In</CustomButton>
                    <CustomButton 
                        type='button' 
                        typeStyle={STYLE_GOOGLE} 
                        onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
import React, {useState} from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {googleSignInStart, emailSignInStart} from '../../redux/user/users.actions';
import {selectAuthError} from '../../redux/user/user.selectors';

import FormInput from "../form-input/formInput.cpnt";
import CustomButton from "../custom-button/custom-button";
import {STYLE_GOOGLE} from '../custom-button/custom-button.styles';
import "./sign-in.scss";

const SignIn = ({emailSignInStart, error_message, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
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
                <p className="error">{error_message ? error_message : '' }</p>
                <div className='buttons'>
                    <CustomButton>Sign In</CustomButton>
                    <CustomButton 
                        type='button' 
                        typeStyle={STYLE_GOOGLE} 
                        onClick={googleSignInStart}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    error_message : selectAuthError,
});
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
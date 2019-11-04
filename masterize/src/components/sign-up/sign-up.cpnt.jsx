import React, {useState, useEffect} from "react";
import FormInput from "../form-input/formInput.cpnt";
import CustomButton from "../custom-button/custom-button";
import {STYLE_INVERTED} from '../custom-button/custom-button.styles';
import "./sign-up.styles.scss";

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {signUpStart, setErrorMessage} from '../../redux/user/users.actions';
import {selectSignUpError} from '../../redux/user/user.selectors';

const SignUp = ({signUp, error_message, setErrorMessage}) => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword} = user;

    useEffect(() => {
        console.debug('error_message', error_message);
        
        setError(error_message);
        if(error_message){
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
    }, [error_message]);

    const handleSubmit = async event => {
        event.preventDefault();
        
        if(password !== confirmPassword){
            setErrorMessage('Passwords are different.')
            return;
        }

        signUp({displayName, email, password});
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUser({...user, [name]: value  });
    }

    return(
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
        
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName' 
                    type="text" 
                    value={displayName} 
                    required 
                    label="Name"
                    handleChange={handleChange}/>
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
                <FormInput 
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    required
                    label="Confirm Password"/>
                {
                    <p className="error">{error ? error : '' }</p>
                }
                <div className='buttons'>
                    <CustomButton typeStyle={STYLE_INVERTED} type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    error_message : selectSignUpError,
});
const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUpStart(user)),
    setErrorMessage: message => dispatch(setErrorMessage(message))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
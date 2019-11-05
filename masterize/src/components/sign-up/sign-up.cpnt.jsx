import React, {useState} from "react";
import FormInput from "../form-input/formInput.cpnt";
import CustomButton from "../custom-button/custom-button";
import {STYLE_INVERTED} from '../custom-button/custom-button.styles';
import "./sign-up.styles.scss";
import {auth} from '../../firebase/firebase.utils';

const SignUp = () => {
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword} = user;
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        
        if(password !== confirmPassword){
            setErrorMessage('Passwords are different.')
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setErrorMessage(error.message);
            setTimeout(()=> setErrorMessage(''), 5000)
        }
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
                <p className="error">{errorMessage}</p>
                <div className='buttons'>
                    <CustomButton typeStyle={STYLE_INVERTED} type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
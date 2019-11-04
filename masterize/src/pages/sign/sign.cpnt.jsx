import React from "react";
import SignIn from "../../components/sign-in/sign-in.cpnt"
import SignUp from "../../components/sign-up/sign-up.cpnt"
import "./sign.style.scss";

const Sign = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/> 
        <SignUp/> 
    </div>
);

export default Sign;

import React from 'react';
import "./footer.style.scss";
import { ReactComponent as Logo } from '../../assets/crown.svg';

import  { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {signOutStart} from "../../redux/user/users.actions";
import {selectCurrentUser} from "../../redux/user/user.selectors";


const Footer = ({currentUser, signOut}) => {
    return (
        <footer className="footer-distributed">
            <p className="footer-company-name">Masterize © 2019</p>

			<div className="footer-left">
                
				<h3><Link className="logo-container" to='/'><Logo className='logo'/></Link> Masterize</h3>

				<p className="footer-links">
                    <Link to='/'>Home</Link>
					·
                    <Link to='/shop'>Shop</Link>
					·
					{(currentUser 
                        ? <span className="option" onClick={ () => signOut() }>Sign out</span>
                        : <Link className="option" to='/sign'>Sign in</Link>)}
					·
					<Link className="option" to='/contact'>Contact</Link>
				</p>

			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker-alt"></i>
					<p><span>21 Revolution Street</span> Copenhagen, Denmark</p>
				</div>

				<div>
					<i className="fa fa-phone-alt"></i>
					<p>+45 44 10 19 80</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:freelance.anthony@gmail.com">freelance.anthony@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About me</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fab fa-facebook"></i></a>
					<a href="#"><i className="fab fa-twitter"></i></a>
					<a href="https://www.linkedin.com/in/anthonylc"><i className="fab fa-linkedin"></i></a>
					<a href="https://github.com/AntoLC"><i className="fab fa-github"></i></a>

				</div>

			</div>

		</footer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
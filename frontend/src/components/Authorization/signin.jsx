import React from "react";
import "../styles/signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const nav = useNavigate()
  return (
    <div className="signin-con flex-row">
        <div className="form-con flex-col">
            <section className="heading">
                <h1 className="logo-head">Quora</h1>
                <p className="logo-para p-13">A place to share knowledge and better understand the world</p>
            </section>
            <section className="signup-opt-con">
                <div className="first-opt flex-col">
                    <p className="p-13" style={{color:'#939598'}}>By continuing you indicate that you agree to Quora’s <span style={{color:'rgb(25, 95, 170)'}}>Terms of Service</span> and <span style={{color:'rgb(25, 95, 170)'}}>Privacy Policy</span>.</p>
                    <div className="signup-opt flex-row">Continue with Google</div>
                    <div className="signup-opt flex-row">Continue with Facebook</div>
                    <p className="s-w-e p-13" onClick={()=>nav('/signup')}>Sign up with Email</p>
                </div> 
                <div className="second-opt flex-col">
                    <h3>Login</h3><hr style={{color:"#dee0e1"}} />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="enter-cred" placeholder="Your Email"/>
                    <label htmlFor="password">Password</label>
                    <input type="text" className="enter-cred" id="password" placeholder="Your Password"/>
                    <div className="flex-row forg">
                        <p className="p-13" style={{cursor:'pointer'}}>Forgot password?</p>
                        <button className="login-btn">Login</button>
                    </div>
                </div>
            </section>
            <footer className="foot flex-row">
                <p className="p-13">About &#x2022; Careers &#x2022; Privacy &#x2022; Terms &#x2022; Contact &#x2022; Language &copy;  Quora, Inc. 2023</p>
            </footer>
        </div>
    </div>
  )
};

export default Signin;

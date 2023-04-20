import React from "react";
import "../styles/signin.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Signin = () => {
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    email : "",
    password : ""
  })
  const { loginWithRedirect } = useAuth0();

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      try {
        const getUserDetails = JSON.parse(token)
        console.log(getUserDetails);
        nav('/main')
      } catch(error) {
        console.error(error);
        setErrorMessage("Error occurred while parsing the token");
      }
    }
  },[])

  const handleLogin = async(e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/auth/log", data)
    .then(result => {
        localStorage.setItem('token', JSON.stringify(result.data.message.userdetails))
        setData({email : "", password : ""})
        nav('/main')
    }) .catch((e)=>{
        alert(e)
    })
  };
  return (
    <div className="signin-con flex-row">
      <div className="form-con flex-col">
        <section className="heading">
          <h1 className="logo-head">Quora</h1>
          <p className="logo-para p-13">
            A place to share knowledge and better understand the world
          </p>
        </section>
        <section className="signup-opt-con">
          <div className="first-opt flex-col">
            <p className="p-13" style={{ color: "#939598" }}>
              By continuing you indicate that you agree to Quora’s{" "}
              <span
                style={{ color: "rgb(25, 95, 170)" }}
                onClick={() => nav("/terms")}
              >
                Terms of Service
              </span>{" "}
              and{" "}
              <span style={{ color: "rgb(25, 95, 170)" }}>Privacy Policy</span>.
            </p>
            <div
              className="signup-opt flex-row"
              onClick={() => loginWithRedirect()}
            >
              Continue with Google
            </div>
            <div
              className="signup-opt flex-row"
              onClick={() => loginWithRedirect()}
            >
              Continue with Facebook
            </div>
            <p className="s-w-e p-13" onClick={() => nav("/signup")}>
              Sign up with Email
            </p>
          </div>
          <div className="second-opt flex-col">
            <h3>Login</h3>
            <hr style={{ color: "#dee0e1" }} />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="enter-cred"
              placeholder="Your Email"
              value={data.email}
              onChange={(e)=>setData({...data, email:e.target.value})}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="enter-cred"
              id="password"
              placeholder="Your Password"
              value={data.password}
              onChange={(e)=>setData({...data, password:e.target.value})}
            />
            <div className="flex-row forg">
              <p className="p-13" style={{ cursor: "pointer" }}>
                Forgot password?
              </p>
              <button className="login-btn" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </section>
        <footer className="foot flex-row">
          <p className="p-13">
            About &#x2022; Careers &#x2022; Privacy &#x2022; Terms &#x2022;
            Contact &#x2022; Language &copy; Quora, Inc. 2023
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signin;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/signin.css'


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      try {
        const getUserDetails = JSON.parse(token)
        nav('/')
      } catch(error) {
        console.error(error);
        setErrorMessage("Error occurred while parsing the token");
      }
    }
  },[])




  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/auth/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });
      const data = await response.json();
      if (data.status === "success") {
        nav('/')
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error occurred while signing up");
    }
  };
  
  const handleClose = ()=>{
    nav('/')
  }

  return (
    <div className="signup-popup flex-row">
       <div className="signup-overlay"></div>
      <div className="signup-popup-content flex-col">
      <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Sign up</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="signup-inputs"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="signup-inputs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="signup-inputs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex-row btn-div">
          <button className="login-btn signup-button" onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

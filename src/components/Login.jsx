
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/login/Login.css";
import axios from "../API/axios";
import { Link } from "react-router-dom";
import { useCurrentContext } from "../context/CurrentProvider";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("");
  const [login, setLogin] = useState("");
  const { setLoginStatus, loginStatus } = useCurrentContext();

  console.log("loginStatus", loginStatus);
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("All Field must be filled");
      setColor("red");
    } else if (!email.includes("@")) {
      setError("Email is invalid");
      setColor("red");
    } else {
      try {
        const response = await axios.post("/user/login", {
          email: email,
          password: password,
          appType: "ott",
        });

        const data = response.data;

        console.log(response);

        console.log("data", data);

        if (data.status === "success") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.data));
          console.log("Login successfully");
          setError("");
          setColor("green");
          setLogin(true);
          navigate("/");
          setLoginStatus(true);
        } else {
          console.error("Login Failed");
          setError("Incorrect Email or password");
          setColor("red");
        }
      } catch (error) {
        console.error("An error occurred: ", error.message);
        setError("An error occurred while logging in");
        setColor("red");
      }
    }
  };

  return (
    <div className="container-l">
      <form>
        <div className="logo-logo"> 
          <img
            src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
            alt=""
          />
        </div>
        <h2 className="heading-header">Login</h2>

        <h4></h4>

        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <input
          className="input-box"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <div className="error">{error}</div>
        {login ? (
          <></>
        ) : (
          <>
            <button
              className="login-button"
              type="button"
              onClick={handleLogin}
            >
              LOGIN
            </button>
            <br />
            <div className="buttons">
              <Link to="/register" >
                <div>
                  <span>
                    <button className="link-button">Create Account</button>
                  </span>
                </div>
              </Link>

              <Link to="/password" >
                <div>
                  <span>
                    <button className="forgot-button">Forgot Password</button>
                  </span>
                </div>
              </Link>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register/Register.css";

const Register = ({ setLoggedInStatus, setUserName, setEMail }) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("");
  const [sign, setSign] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      setError("All Fields must be filled");
      setColor("red");
    } else if (!email.includes("@")) {
      setError("Email is invalid");
      setColor("red");
    } else {
      try {
        (async function () {
          var raw = JSON.stringify({
            name: `${username}`,
            email: `${email}`,
            password: `${password}`,
            appType: "ott",
          });

          const response = await fetch(
            "https://academics.newtonschool.co/api/v1/user/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                projectId: "f104bi07c490",
              },
              body: raw,
              redirect: "follow",
            }
          );

          if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem(
              `signup`,
              JSON.stringify({
                sign: responseData,
              })
            );
            setError("Registered successfully");
            setColor("green");
            setSign(true);
            setUserName(username);
            setEMail(email);
            setLoggedInStatus(true);
          } else {
            console.log("Registration Failed", response);
            setError("Incorrect Email or password");
            setColor("red");
          }
        })();
      } catch (error) {
        console.error("An error occurred: ", error);
        setError("An error occurred while registering");
        setColor("red");
      }
    }
  };

  return (
    <div className="container-v">
      <form className="form-x">
        <div>
          <img
            className="logo"
            src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
            alt=""
          />
        </div>
        <h2 className="heading"> Sign in </h2>

        <input
          className="Inputbox"
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={handleUsername}
        />
        <br />

        <input
          className="Inputbox"
          type="text"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <input
          className="Inputbox"
          type="password"
          placeholder="Create a Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <div className="error">{error}</div>

        {sign ? (
          <></>
        ) : (
          <>
            <div>
              <div>
                Already registered?{" "}
                <Link to="/Login" className="link-span">
                  <span>Login</span>
                </Link>{" "}
              </div>

              <div className="register-button" onClick={handleLogin}>
                Next
              </div>
            </div>

            <br />
          </>
        )}
      </form>
    </div>
  );
};

export default Register;

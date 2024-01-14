import React, { useState } from "react";
import axios from "../API/axios";
import "../styles/forgotpassword/ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { searchApi } from "../API/Services";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          method: "PATCH ",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectID: "f104bi07c490",
          },
          body: JSON.stringify({
            name: "test6969",
            email: "test6969@gmail.com",
            passwordCurrent: currentPassword,
            password: newPassword,
            appType: "ecommerce",
          }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        // Password updated successfully
        console.log("Password updated successfully");
        handleClose();
        // Navigate to the home page
      } else {
        setError(
          data.message || "An error occurred while updating the password"
        );
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      setError("An error occurred while updating the password");
    }
  };
  return (
    <div className="container-k">
      <div>
        <img
          className="con-img"
          src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
          alt=""
        />
      </div>
      <div className="UpdatePasswordContainer">
        <label className="label">Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="inputStyle"
        />

        <label className="label">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="inputStyle"
        />

        <label className="label">Confirm New Password</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="inputStyle"
        />

        {error && <p className="errorStyle">{error}</p>}

        <button
          type="button"
          onClick={handleUpdatePassword}
          className="buttonStyle"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;





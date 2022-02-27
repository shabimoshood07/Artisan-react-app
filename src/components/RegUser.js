import React, { useState } from "react";
import axios from "axios";
function RegUser() {
  const [checking, setChecking] = useState(false);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "https://artisan-dot-com-api.herokuapp.com/api/v1/artisan/regUser/signup",
        {
          username: username,
          phoneNumber: phoneNumber,
          password: password,
        }
      );
      console.log(user);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="reg-body">
      <div className="reg-container">
        <div className="reg-title">User Registration</div>

        {/* FORM */}
        <form className="registration-form" encType="multipart/form-data">
          <div className="user-details">
            {/* USERNAME */}
            <div className="input-box">
              <span className="details">Username</span>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

            {/* PHONE NUMBER*/}
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="email"
                placeholder="Phone number "
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>

            {/* PASSOWRD*/}
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="text"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            {/* CONFIRM PASSOWRD*/}
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
          </div>

          <button type="submit" className="login-button" onClick={handleSubmit}>
            {checking ? "checking...." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegUser;

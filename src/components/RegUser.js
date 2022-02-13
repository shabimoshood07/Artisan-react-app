import React, { useState } from "react";

function RegUser() {
  const [checking, setChecking] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="reg-body">
      <div className="reg-container">
        <div className="reg-title">User Registration</div>

        {/* FORM */}
        <form className="registration-form" encType="multipart/form-data">
          <div className="user-details">
            {/* FULL NAME */}
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter name here"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            {/* EMAIL*/}
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="email"
                placeholder="Enter your email "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit" className="button" onClick={handleSubmit}>
            {checking ? "checking...." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegUser;

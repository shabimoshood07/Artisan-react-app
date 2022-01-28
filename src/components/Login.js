import React from "react";

function Login() {
  return (
    <div className="login-wrapper">
      <h1 className="header-text">Please Log In</h1>
      <form>
        <div className="user-box">
          <input type="text" name="" placeholder="Username"></input>
          <label for="Username"></label>
        </div>
        <div className="user-box">
          <input type="password" />
          <label for="password"></label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;

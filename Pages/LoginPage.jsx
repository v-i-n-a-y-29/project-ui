import React from "react";
import "./LoginPage.css"; // Import the CSS

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/your-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="login-container">
        <div className="login-card">
          <div className="logo">
            <img src="/Logo.jpg" alt="UPES Logo" />
        </div>

        <h1 >LOGIN</h1>

        <form>
            <label>Email</label>
            <input type="email" placeholder="username@stu.upes.ac.in" />

            <label>Password</label>
            <input type="password" placeholder="Password" />

            <div className="forgot-password">Forgot Password?</div>

            <button type="submit">Sign in</button>
          </form>

          <div className="register-link">
            Don’t have an account yet? <span>Register</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

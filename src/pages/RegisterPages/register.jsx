import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urllocal } from "../../utils/fungsi";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  // Load Google reCAPTCHA script & define callback
  useEffect(() => {
    // Callback global
    window.onRecaptchaSuccess = (token) => {
      setToken(token);
    };

    // Tambahkan script Google reCAPTCHA
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup jika komponen unmount
    return () => {
      document.body.removeChild(script);
      delete window.onRecaptchaSuccess;
    };
  }, []);

  const register = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Silahkan centang reCAPTCHA");
      return;
    }

    if (username.length < 8) {
      alert("Username minimal 8 karakter");
      return;
    }

    if (password.length < 8) {
      alert("Password minimal 8 karakter");
      return;
    }

    if (password !== cpassword) {
      alert("Password dan konfirmasi tidak sama");
      return;
    }

    try {
      const res = await fetch(`${urllocal}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, token }),
      });

      const data = await res.json();
      alert(data.message);

      if (data.hasil === true) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan, coba lagi");
    }
  };

  return (
    <div className="containerRegister">
      <form className="formRegister" onSubmit={register}>
        <h1>To Do It</h1>
        <p>Enter your username and password to create account</p>

        <div className="line"></div>

        <div className="username">
          <label>Username</label>
          <input
            type="text"
            placeholder="example2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            placeholder="Example*1234."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="confirmpass">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Example*1234."
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </div>

        {/* reCAPTCHA */}
        <div
          className="g-recaptcha"
          data-sitekey="6LdgtmQsAAAAAMk6oOaUOj7mf3VBN-YfdY0NbmaC" // ganti ini dengan Site Key untuk domain Vercel
          data-callback="onRecaptchaSuccess"
        ></div>

        <button type="submit">Register</button>
        <h5>
          Have an account? <a href="/login">Login</a>
        </h5>
      </form>
    </div>
  );
};

export default Register;
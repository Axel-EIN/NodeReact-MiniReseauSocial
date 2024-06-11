import { useState } from "react";
import "./RegistrationForm.css";
import { register } from "../../api/api-client.js";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await register({email, password, login});
        navigate("/log-in");
      } catch (error) {
        console.error(error.message);
      }

      setLogin("");
      setEmail("");
      setPassword("");
    };

    return (
      <div className="registration-form-wrapper">
        <form
          className="registration-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label className="registration-form-label">
            <span className="label-span">Login</span>
            <input
              className="registration-form-input"
              type="text"
              name="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>
          <label className="registration-form-label">
            <span className="label-span">Email</span>
            <input
              className="registration-form-input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="registration-form-label">
            <span className="label-span">Password</span>
            <input
              className="registration-form-input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="registration-form-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    );
};
export default RegistrationForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//user data
export let userData;

export const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { userName, password })
      .then((data) => {
        console.log(data);
        userData = data.data;
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form method="post" onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          User Name:
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="form-control"
          id="userName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="password "
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

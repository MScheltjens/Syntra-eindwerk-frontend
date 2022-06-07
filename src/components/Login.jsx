import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: "mathias.scheltjens@gmail.com",
      password: "test",
    });

    let reqOptions = {
      url: "https://localhost:8000/login",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{email}</p>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{password}</p>
        <button>login!</button>
      </form>
    </div>
  );
};

export default Login;

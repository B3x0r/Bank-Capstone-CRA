import React from "react";
import { UserContext, Card } from "./context";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState('');
  const { isLoggedin, setIsLoggedin, validateLogin } = React.useContext(UserContext);

  const handleLogin = () => {

    validateLogin({ email, password })
    .then((success) => {
      setEmail("");
      setPassword("");
      console.log("isLoggedin in login", isLoggedin)
      if (!success) {
        setStatus ("Email and password does not match our records.");
        setTimeout(() => setStatus(""), 3000);
      }
    })
    .catch(() => {
      setIsLoggedin(false);
    });
  };

    const handleLogout = () => {
      setIsLoggedin(false);
    };

  return (
    <Card
      bgcolor="dark"
      header="Login"
      status={status}
      title="Welcome"
      body={
        !isLoggedin ? (
          <>
            <form>
              Email
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              Password
              <br />
              <input
                id="password"
                className="password"
                type="password"
                placeholder="Enter password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </form>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!email.length && !password.length}
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>User is logged in</h5>
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogout}
            >
              Logout User
            </button>
          </>
        )
      }
    />
  );
}

export default Login;

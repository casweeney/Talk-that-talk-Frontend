import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Signup = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { signup, isAuthenticated, error, clearErrors } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/submit");
    }

    if (error !== null && error !== undefined) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [isAuthenticated, error]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signup(user);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-md-6">
          <div className="card" id="signup_card">
            <br />
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    value={username}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={onChange}
                  />
                </div>

                <center>
                  <button
                    type="submit"
                    className="btn btn-info"
                    style={{
                      backgroundColor: "#22656D",
                      borderColor: "#22656D",
                      paddingRight: "20%",
                      paddingLeft: "20%",
                      borderRadius: "2px",
                    }}
                  >
                    Sign up
                  </button>
                </center>
              </form>
              <br />
              <center>
                <Link
                  to="/login"
                  className="btn btn-default"
                  style={{
                    color: "#22656D",
                    paddingRight: "20%",
                    paddingLeft: "20%",
                    borderRadius: "2px",
                  }}
                >
                  Sign in
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Signup;

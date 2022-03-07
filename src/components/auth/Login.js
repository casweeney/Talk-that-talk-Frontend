import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, error, clearErrors } = authContext;

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
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    login(user);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-md-4">
          <div className="card">
            <br />
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="form-control"
                    onChange={onChange}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Choose password"
                    className="form-control"
                    onChange={onChange}
                    value={password}
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
                    Sign in
                  </button>
                </center>
              </form>
              <br />
              <center>
                <Link
                  to="/signup"
                  className="btn btn-default"
                  style={{
                    color: "#22656D",
                    paddingRight: "20%",
                    paddingLeft: "20%",
                    borderRadius: "2px",
                  }}
                >
                  Sign up
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;

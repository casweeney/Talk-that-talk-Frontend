import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark scrolled"
      style={{ paddingTop: "0", paddingBottom: "0" }}
    >
      <div className="container">
        <Link
          style={{ color: "#fff", fontSize: "30px" }}
          className="navbar-brand"
          to="/"
        >
          {" "}
          Talk that talk{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={onLogout} to="#!">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submit">
                {" "}
                <i className="fa fa-pencil"></i>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

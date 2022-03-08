import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  let submitUrl;
  if (isAuthenticated) {
    submitUrl = "/submit";
  } else {
    submitUrl = "/login";
  }

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <a
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={onLogout}
          to="#!"
        >
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
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
    </Fragment>
  );

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
            {isAuthenticated ? authLinks : guestLinks}
            <li className="nav-item">
              <Link className="nav-link" to={submitUrl}>
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

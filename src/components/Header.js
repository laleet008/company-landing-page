import React from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={classes.header}>
      <div className={classes.nav_elements}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={classes.nav_elements_logo}>Coding Mountain</div>{" "}
        </Link>
        <div className={classes.nav_elements_links}>
          <Link to="/terms" style={{ textDecoration: "none" }}>
            <span>Terms</span>
          </Link>
          <Link to="/privacy" style={{ textDecoration: "none" }}>
            <span>Privacy</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

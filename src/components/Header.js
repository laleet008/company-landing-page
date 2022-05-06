import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={classes.header}>
      <div className={classes.nav_elements}>
        <div className={classes.nav_elements_logo}>Coding Mountain</div>
        <div className={classes.nav_elements_links}>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

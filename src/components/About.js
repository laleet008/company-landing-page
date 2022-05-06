import React from "react";
import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.about_heading}>upgrade your business</div>
      <div className={classes.about_description}>
        It's easy to get started. Our low monthly fees allow you to try out our
        services before investing in any software.
      </div>
      <button className={classes.about_btn}>Learn more</button>
    </div>
  );
};

export default About;

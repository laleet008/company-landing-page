import React from "react";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_heading}>
        We are a software company, winning trust.
      </div>
      <div className={classes.hero_description}>
        We are a service biased company, that makes software for mobile. some
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis
        nostrum aut!
      </div>
      <button className={classes.hero_btn}>Get Started</button>
    </div>
  );
};

export default Hero;

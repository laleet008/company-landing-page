import React from "react";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero_page}>
      <div className={classes.hero}>
        <div className={classes.hero_heading}>
          We are a software company, winning trust.
        </div>
        <div className={classes.hero_description}>
          We are a service biased company, that makes software for mobile. some
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nobis nostrum aut!
        </div>
        <button className={classes.hero_btn}>Get Started</button>
      </div>
      <div className={classes.hero_page_container}>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className={classes.hero_page_img}
        />
      </div>
    </div>
  );
};

export default Hero;

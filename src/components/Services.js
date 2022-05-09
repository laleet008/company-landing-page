import React from "react";
import classes from "./Services.module.scss";
import { FaGlobe, FaPython } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const Services = () => {
  return (
    <div className={classes.services_container}>
      <div className={classes.services_container_item}>
        <div className={classes.services_container_item_icon}>
          <FaGlobe />
        </div>
        <div className={classes.services_container_item_title}>
          Quality IT services
        </div>
        <div className={classes.services_container_item_description}>
          We're an IT solutions and services company with a network of the best
          tech experts in the business.
        </div>
      </div>
      <div className={classes.services_container_item}>
        <div className={classes.services_container_item_icon}>
          <MdSettings />
        </div>
        <div className={classes.services_container_item_title}>
          Customizable for you
        </div>
        <div className={classes.services_container_item_description}>
          We won't waste your time or money creating a solution that we think
          will work
        </div>
      </div>
      <div className={classes.services_container_item}>
        <div className={classes.services_container_item_icon}>
          <FaPython />
        </div>
        <div className={classes.services_container_item_title}>
          Technical Expertise
        </div>
        <div className={classes.services_container_item_description}>
          Let us handle all of your software needs and see how easy it is to
          work with a service-biased company.
        </div>
      </div>
    </div>
  );
};

export default Services;

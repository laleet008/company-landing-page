import React from "react";
import classes from "./Footer.module.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_item}>
        <div className={classes.footer_item_title}>coding mountain</div>
        <div className={classes.footer_item_description}>
          We build web, mobile and desktop apps. We love to code.
        </div>
        <ul className={classes.footer_item_icon}>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
      <div className={classes.footer_item}>
        <div className={classes.footer_item_title}>Solution</div>
        <ul className={classes.footer_item_list}>
          <li>Mobile</li>
          <li>Web</li>
          <li>Desktop</li>
          <li>Graphics</li>
        </ul>
      </div>

      <div className={classes.footer_item}>
        <div className={classes.footer_item_title}>Support</div>
        <ul className={classes.footer_item_list}>
          <li>Pricing</li>
          <li>API Status</li>
          <li>Guides</li>
          <li>Documentation</li>
        </ul>
      </div>
      <div className={classes.footer_item}>
        <div className={classes.footer_item_title}>Company</div>
        <ul className={classes.footer_item_list}>
          <li>Blog</li>
          <li>About us</li>
          <li>Career</li>
          <li>Press</li>
          <li>Our Clients</li>
          <li>Expertise</li>
        </ul>
      </div>

      <div className={classes.footer_item}>
        <div className={classes.footer_item_title}>Address</div>
        <ul className={classes.footer_item_list}>
          <li>+977 9837483434, </li>
          <li>codingmountain@gmail.com</li>
          <li>
            <i>M87C+Q2 Lalitpur</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

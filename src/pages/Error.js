import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <Layout>
      <div className="error">
        <h1 className="error_404">404</h1>
        <p className="error_desc">Oops! Page note found</p>

        <Link to="/">
          <button className="error_btn">Back to Home</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Error;

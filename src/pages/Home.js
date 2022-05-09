import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
    </Layout>
  );
};

export default Home;

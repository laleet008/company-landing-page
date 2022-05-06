import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Services />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;

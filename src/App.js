import { Route, Routes } from "react-router";
import "./main.scss";
import Home from "./pages/Home";
import TermsPage from "./pages/TermsPage";
import Privacy from "./pages/Privacy";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/terms" element={<TermsPage />}></Route>
        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import ValuesandVariables from "./Components/Values and Variables";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import JavaScriptTopicsPage from "./Page/JavaScript/JavaScriptTopicsPage";
import DataTypesJavaScript from "./Page/JavaScript/DataTypesJavaScript";
import ComingSoonPage from "./Page/CominSoon";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/javascript" Component={JavaScriptTopicsPage} />
          <Route path="/javascript/ValuesandVariables" Component={ValuesandVariables} />
          <Route path="/javascript/datatypes" Component={DataTypesJavaScript} />
          <Route path="/javascript/advanced-datatypes" Component={ComingSoonPage} />
          <Route path="/javascript/Concatenation&TypeCoercion" Component={ComingSoonPage} />
          <Route path="/javascript/Expressions&operators-loops" Component={ComingSoonPage} />
          <Route path="/javascript/functions" Component={ComingSoonPage} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import JavaScriptTopicsPage from "./Page/JavaScript/JavaScriptTopicsPage";
import DataTypesJavaScript from "./Page/JavaScript/DataTypesJavaScript";
import ComingSoonPage from "./Page/CominSoon";
import ValuesandVariables from "./Page/JavaScript/Values and Variables";
import ConcatenationTypeCoercion from "./Page/JavaScript/Concatenation&TypeCoercion";
import FunctionsJavaScript from "./Page/JavaScript/FunctionsJavaScript";
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
          <Route path="/javascript/Concatenation&TypeCoercion" Component={ConcatenationTypeCoercion} />
          <Route path="/javascript/Expressions&operators-loops" Component={ComingSoonPage} />
          <Route path="/javascript/functions" Component={FunctionsJavaScript} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

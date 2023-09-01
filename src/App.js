import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Main />
        <Routes></Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

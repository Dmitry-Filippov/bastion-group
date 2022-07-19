import { Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, {useState} from "react";
import {Navbar} from "./components/Navbar";
import {Routes} from './components/Routes';
import {Footer} from './components/Footer';

function App() {

  const [darkThem, setDarkThem] = useState(false);

  return (
    <div className={darkThem ? "dark" : ''}>
      <div>
        <Navbar />
        <Routes /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import {Navbar} from "./components/Navbar";
import {RoutesComp} from './components/RoutesComp';
import {Footer} from './components/Footer';

function App() {

  const [darkThem, setDarkThem] = useState(false);

  return (
    <div className={darkThem ? "dark" : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkThem={darkThem} setDarkThem={setDarkThem} />
        <RoutesComp /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;

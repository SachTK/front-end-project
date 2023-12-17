import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Preloader1 from "./components/Preloader1";
import About from "./components/About";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [loading , setloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
       setloading(true);
    }, 3000);
  },[])


  return (
    <div className="text-white">
      { !loading ? <Preloader1/>:<><Navbar /><Home /><About /><Footer /></> }
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashBoad from "./pages/DashBoad";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import MaybeShowNav from "./components/maybeshownav/MaybeShowNav";
import Services from "./pages/service/Services";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (


    <div className="w-screen h-screen bg-richblack-900 flex flex-col" >

      <MaybeShowNav>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </MaybeShowNav>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/services" element={<Services setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <DashBoad />
          </PrivateRoute>

        } />

      </Routes>
    </div>


  );
}

export default App;

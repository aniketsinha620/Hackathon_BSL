// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import DashBoad from "./pages/DashBoad";
// import { useState } from "react";
// import PrivateRoute from "./components/PrivateRoute";
// import About from "./pages/About";
// import MaybeShowNav from "./components/maybeshownav/MaybeShowNav";
// import Services from "./pages/service/Services";
// import Carddashboard from "./pages/dashboard/Carddashboard";
// import { Layout } from "./pages/dashboard/Layout";
// import Expense from "./pages/dashboard/Expense";
// import Chatdashboard from "./pages/dashboard/Chatdashboard";
// import Sidenavbar from "./pages/dashboard/Sidenavbar";
// import Mayshowsidebar from "./components/maybeshownav/Mayshowsidebar";
// import Booking from "./pages/service/Booking";
// import Seat_booking from "./pages/service/Seat_booking";
// import Map from "./pages/service/map/Map";
// import Expand from "./pages/service/map/Expand";
// import BusdetailCard from "./pages/dashboard/BusdetailCard";
// import Busdriver from "./pages/dashboard/Busdriver";







// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   return (

//     <div className="appjs w-screen h-screen bg-richblack-900 flex flex-col" >


//      <div className="w-screen h-screen bg-richblack-900 flex flex-col" >

//     <MaybeShowNav>
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       </MaybeShowNav>
//       <Mayshowsidebar>
//         <Sidenavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       </Mayshowsidebar>

//         <MaybeShowNav>
//           <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         </MaybeShowNav>
//         <Mayshowsidebar>
//           <Sidenavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         </Mayshowsidebar>


//         <Routes>
//           <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
//           <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/services" element={<Services setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/dashboard" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <DashBoad />
//             </PrivateRoute>} >
//           </Route>

//           <Route path="/dashboard/Admin" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Carddashboard />
//             </PrivateRoute>} >
//           </Route>

//           <Route path="/dashboard/Admin" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Carddashboard />
//             </PrivateRoute>} >
//           </Route>

//         <Route path="/dashboard/expense" element={
//           <PrivateRoute isLoggedIn={isLoggedIn}>
//             <Expense/>
//           </PrivateRoute> } >
//         </Route>
//         <Route path="/dashboard/chat" element={
//           <PrivateRoute isLoggedIn={isLoggedIn}>
//            <Chatdashboard/>
//           </PrivateRoute> } >
//         </Route>
//         <Route path="/dashboard/form" element={
//           <PrivateRoute isLoggedIn={isLoggedIn}>
//             <Layout/>
//           </PrivateRoute> } >
//         </Route>

//       </Routes>

//           <Route path="/dashboard/expense" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Expense />
//             </PrivateRoute>} >
//           </Route>
//           <Route path="/dashboard/chat" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Chatdashboard />
//             </PrivateRoute>} >
//           </Route>
//           <Route path="/dashboard/form" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Layout />
//             </PrivateRoute>} >
//           </Route>
// </Routes>


//       </div> 


//     </div>


//   )
// };

// export default App;


// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import DashBoad from "./pages/DashBoad";
// import { useState } from "react";
// import PrivateRoute from "./components/PrivateRoute";
// import About from "./pages/About";
// import MaybeShowNav from "./components/maybeshownav/MaybeShowNav";
// import Services from "./pages/service/Services";


// import Carddashboard from "./pages/dashboard/Carddashboard";
// import { Layout } from "./pages/dashboard/Layout";
// import Expense from "./pages/dashboard/Expense";
// import Chatdashboard from "./pages/dashboard/Chatdashboard";
// import Sidenavbar from "./pages/dashboard/Sidenavbar";
// import Mayshowsidebar from "./components/maybeshownav/Mayshowsidebar";


// import Booking from "./pages/service/Booking";
// import Seat_booking from "./pages/service/Seat_booking";
// import Map from "./pages/service/map/Map";
// import Expand from "./pages/service/map/Expand";
// import BusdetailCard from "./pages/dashboard/BusdetailCard";
// import Busdriver from "./pages/dashboard/Busdriver";







// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   return (





//     <div className="appjs w-screen h-screen bg-richblack-900 flex flex-col" >


//      <div className="w-screen h-screen bg-richblack-900 flex flex-col" >



//       <MaybeShowNav>
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       </MaybeShowNav>
//       <Mayshowsidebar>
//         <Sidenavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       </Mayshowsidebar>

//         <MaybeShowNav>
//           <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         </MaybeShowNav>
//         <Mayshowsidebar>
//           <Sidenavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         </Mayshowsidebar>


//         <Routes>
//           <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
//           <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/services" element={<Services setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/dashboard" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <DashBoad />
//             </PrivateRoute>} >
//           </Route>

//           <Route path="/dashboard/Admin" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Carddashboard />
//             </PrivateRoute>} >
//           </Route>

//           <Route path="/dashboard/Admin" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Carddashboard />
//             </PrivateRoute>} >
//           </Route>


//         <Route path="/dashboard/expense" element={
//           <PrivateRoute isLoggedIn={isLoggedIn}>
//             <Expense/>
//           </PrivateRoute> } >
//         </Route>
//         <Route path="/dashboard/chat" element={
//           <PrivateRoute isLoggedIn={isLoggedIn}>
//            <Chatdashboard/>
//           </PrivateRoute> } >
//         </Route>
//         <Route path="/dashboard/form" element={
//           <PrivateRoute isLoggedIn={isLoggedIn}>
//             <Layout/>
//           </PrivateRoute> } >
//         </Route>

//       </Routes>

//           <Route path="/dashboard/expense" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Expense />
//             </PrivateRoute>} >
//           </Route>
//           <Route path="/dashboard/chat" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Chatdashboard />
//             </PrivateRoute>} >
//           </Route>
//           <Route path="/dashboard/form" element={
//             <PrivateRoute isLoggedIn={isLoggedIn}>
//               <Layout />
//             </PrivateRoute>} >
//           </Route>
// </Routes>


//       </div> 
//       </div> 



//   );
// }

// export default App;
// <PrivateRoute isLoggedIn={isLoggedIn}></PrivateRoute>
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

import Carddashboard from "./pages/dashboard/Carddashboard";
import { Layout } from "./pages/dashboard/Layout";
import Expense from "./pages/dashboard/Expense";
import Chatdashboard from "./pages/dashboard/Chatdashboard";
import Sidenavbar from "./pages/dashboard/Sidenavbar";
import Mayshowsidebar from "./components/maybeshownav/Mayshowsidebar";
import Booking from "./pages/service/Booking";
import Seat_booking from "./pages/service/Seat_booking";
import Map from "./pages/service/map/Map";
import Expand from "./pages/service/map/Expand";
import BusdetailCard from "./pages/dashboard/BusdetailCard";
import Busdriver from "./pages/dashboard/Busdriver";
import Services_inside from "./pages/service_inside/Service_inside";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="appjs w-screen h-screen bg-richblack-900 flex flex-col">
      <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <MaybeShowNav>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </MaybeShowNav>
        <Mayshowsidebar>
          <Sidenavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Mayshowsidebar>

        

        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
         
       
          <Route path="/services/inside" element={<Services_inside setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/services/outside" element={<Services setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><DashBoad /></PrivateRoute>} />
          <Route path="/dashboard/Admin" element={<PrivateRoute isLoggedIn={isLoggedIn}><Carddashboard /></PrivateRoute>} />
          <Route path="/dashboard/expense" element={<PrivateRoute isLoggedIn={isLoggedIn}><Expense /></PrivateRoute>} />
          <Route path="/dashboard/chat" element={<PrivateRoute isLoggedIn={isLoggedIn}><Chatdashboard /></PrivateRoute>} />
          <Route path="/dashboard/form" element={<PrivateRoute isLoggedIn={isLoggedIn}><Layout /></PrivateRoute>} />
        </Routes>
        <Routes>
          <Route path="/dashboard/expense" element={<PrivateRoute isLoggedIn={isLoggedIn}><Expense /></PrivateRoute>} />
          <Route path="/dashboard/chat" element={<PrivateRoute isLoggedIn={isLoggedIn}><Chatdashboard /></PrivateRoute>} />
          <Route path="/dashboard/form" element={<PrivateRoute isLoggedIn={isLoggedIn}><Layout /></PrivateRoute>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

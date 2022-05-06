import React from "react";
import Navbar from "./Components/Navbar"
import Carousel from "./Components/Carousel"
import LoginValidate from "./Components/LoginValidate";
import {Routes, Route} from "react-router-dom";
import RegisterForm from "./Components/Register";
import Enquire from "./Components/Enquire";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
     

      {/* <LoginValidate/> */}
      
      <Routes>
          <Route path="Login" element={<LoginValidate />} />
          <Route path="/" element={<Carousel /> } />
          <Route path="register" element={<RegisterForm />} />
          <Route path="Enquire" element={<Enquire />} />
      </Routes>
      <Footer/>


     
      

     
    </div>
  );
}

export default App;

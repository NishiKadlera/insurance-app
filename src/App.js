import React from "react";
import Navbar from "./Components/Navbar"
import Carousel from "./Components/Carousel"
import LoginValidate from "./Components/LoginValidate";
import {Routes, Route} from "react-router-dom";
import RegisterForm from "./Components/Register";
import Enquire from "./Components/Enquire";
import Footer from "./Components/Footer";
import HomeInsurance from "./Components/HomeInsurance"
import VehicleInsurance from "./Components/VehicleInsurance";
import HealthInsurance from "./Components/HealthInsurance";
import Claim from "./Components/HomeClaim";
import Renew from "./Components/Renew";
import About1 from "./Components/AboutUs";
import Policy from "./Components/Mypolicies";
import Enquiry from "./Components/Enquire";
import HomeClaim from "./Components/HomeClaim";
import Read from "./Mypolicies/Read";
import AddDetails from "./Mypolicies/Addstudent";
import Update from "./Mypolicies/Update";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Policies/> */}

      {/* <Renew/> */}
      <Routes>
          <Route path="Login" element={<LoginValidate />} />
          <Route path="/" element={<Carousel /> } />
          <Route path="register" element={<RegisterForm />} />
          <Route path="Enquire" element={<Enquire />} />
          <Route path="HomeInsurance" element={<HomeInsurance />} />
          <Route path="VehicleInsurance" element={<VehicleInsurance />} />
          <Route path="HealthInsurance" element={<HealthInsurance />} />
          <Route path="claim1" element={<Claim />} />
          <Route path="renew" element={<Renew />} />
          <Route path="abouts" element={<About1 />} />
          <Route path="mypolicy" element={<Policy />} />
          <Route path="enquire" element={<Enquiry />} />
          <Route path="Homeclaim" element={<HomeClaim />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/adddetails/:id" element={<AddDetails />} />
          <Route path="/update/:id" element={<Update />} />
      </Routes>
      {/* <Update /> */}
      <Footer/>
  


     
      

     
    </div>
  );
}

export default App;

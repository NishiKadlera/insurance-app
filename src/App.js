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
<<<<<<< HEAD
import Policy from "./Components/Mypolicies";
import Enquiry from "./Components/Enquire";
import HomeClaim from "./Components/HomeClaim";

=======
>>>>>>> 2d463311fec6081dd1dd318faa7ede9915a812e5

function App() {
  return (
    <div className="App">
      <Navbar/>
<<<<<<< HEAD
      {/* <Policies/> */}
=======
>>>>>>> 2d463311fec6081dd1dd318faa7ede9915a812e5
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
<<<<<<< HEAD
          <Route path="mypolicy" element={<Policy />} />
          <Route path="enquire" element={<Enquiry />} />
          <Route path="Homeclaim" element={<HomeClaim />} />

=======
>>>>>>> 2d463311fec6081dd1dd318faa7ede9915a812e5
      </Routes>
      <Footer/>
  


     
      

     
    </div>
  );
}

export default App;

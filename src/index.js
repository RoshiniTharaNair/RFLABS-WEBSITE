import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import Solutions from "views/index-sections/Solutions/Index";
import Systems from "views/index-sections/Systems/Index";
import Contact from "views/index-sections/Home/Contact";
import Features from "views/index-sections/Systems/Features";
import Services from "views/index-sections/Services/Index";
import About from "views/index-sections/Home/About";
import Team from "views/index-sections/Home/Team";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Index />} />
      <Route path="/Home/solutions" element={<Solutions />} />
      <Route path="/#contact" element={<Contact />} />
      <Route path="/Home/software" element={<Systems />} />
      <Route path="/#about" element={<About />} />
      <Route path="/#team" element={<Team />} />



      {/* <Route path="/barcode" element={<Features />} />
      <Route path="/cctv" element={<Features />} />
      <Route path="/biometric" element={<Features />} />
      <Route path="/possystem" element={<Features />} /> */}

      <Route path="/services" element={<Services />} />
-
     <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

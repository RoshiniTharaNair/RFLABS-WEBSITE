import React from "react";
import { Container, Row, Col } from "reactstrap";
import servicesImage from "assets/img/services.png"; // Import the image
import { motion } from "framer-motion";


function Services() {
  // Import your images at the top of the file
  // Assuming that your images are placed in the `public/assets/images` directory

  return (
<Container fluid style={{
    //   display: "flex", // Enable flex container
    //   flexDirection: "column", // Stack children vertically
    //   // justifyContent: "center", // Center children vertically
    //   // alignItems: "center", // Center children horizontally
    //   height: "200vh", // Full viewport height
      marginTop: "140px",
      marginBottom:"30px",
      fontFamily: "Open Sans, sans-serif"
    }}> 
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#0C3C60", fontSize: "46px", fontWeight: 400, marginBottom: "0.1em" }}>
      Services
      </h1>
      <hr style={{ border: "none", borderBottom: "4px solid #0C3C60", width: "115px", margin: "0 auto" }} />
      <p style={{color: "#0C3C60", fontSize: "16px", fontWeight: 400, margin:"40px 0"}}>We are experts in the field at providing cost effective custom made solutions to our clients. Here are 5 easy step process
</p>
<motion.img
          src={servicesImage}
          alt="Services Solution"
          className="service-img"
          initial={{ scale: 0.5, opacity: 0 }} // Start at half size and invisible
          animate={{ scale: 1, opacity: 1 }}  // Animate to full size and visible
          transition={{
            type: "spring",
            stiffness: 100,  // Lower stiffness makes the spring animation looser
            damping: 20,     // Adjust damping for more or less oscillation
            duration: 1      // A longer duration for a slower animation
          }}
          style={{ width: "90%", height: "auto", margin: "auto" }} // Center image
        />
    </div>
   <style>
    {`
    @media (max-width: 699px) {
      .service-img {
        width: 90% !important;

      }
      
    }

    @media (min-width: 700px) {
      .service-img {
       width: 75% !important;
      }
      
    `}
   </style>
    </Container>
  );
}

export default Services;

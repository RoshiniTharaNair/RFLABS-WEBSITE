import React from "react";
import { Container, Row, Col } from "reactstrap";
import healthImage from "assets/img/healthcare-840x560.jpg"; // Import the image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function SystemsPage() {
  // Import your images at the top of the file
  // Assuming that your images are placed in the `public/assets/images` directory

  return (
<Container fluid style={{
    //   display: "flex", // Enable flex container
    //   flexDirection: "column", // Stack children vertically
    //   // justifyContent: "center", // Center children vertically
    //   // alignItems: "center", // Center children horizontally
    //   height: "200vh", // Full viewport height
      marginTop: "150px",
      fontFamily: "Open Sans, sans-serif"
    }}> 
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#0C3C60", fontSize: "46px", fontWeight: 400, marginBottom: "0.1em" }}>
        Systems
      </h1>
      <hr style={{ border: "none", borderBottom: "4px solid #0C3C60", width: "115px", margin: "0 auto" }} />
    </div>
   
    </Container>
  );
}

export default SystemsPage;

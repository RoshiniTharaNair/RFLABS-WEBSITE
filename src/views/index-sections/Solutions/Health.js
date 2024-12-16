import React, { useEffect, useState, forwardRef } from "react";
import { Container, Row, Col } from "reactstrap";
import healthImage from "assets/img/healthcare-840x560.jpg"; // Import the image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import checkedlogo from "assets/img/checked logo.jpg"; // Import the image



function Health() {
  // Import your images at the top of the file
  // Assuming that your images are placed in the `public/assets/images` directory

  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,  // Trigger when 50% of the element is in view
  });
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isTextLoaded, setTextLoaded] = useState(false);

  const location = useLocation(); // This hook gives you access to the current URL location object

  useEffect(() => {
    // This effect runs when the `location.hash` changes
    if (location.hash === "#health-care") {
      // Check if the hash matches your target
      const element = document.getElementById('health-care'); // Get the element by ID
      if (element) {
        // If the element exists, scroll to it
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]); // Depend on `location` to re-run the effect when it changes



  useEffect(() => {
    // Simulate an async image load with setTimeout
    // You would replace this with your actual image load callback
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500); // The delay before the animation starts

    const textTimer = setTimeout(() => {
      setTextLoaded(true);
    }, 500); // Delay text appearance for smooth transition

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);
  return (
<Container fluid  className='health-container' style={{
      display: "flex", // Enable flex container
      flexDirection: "column", // Stack children vertically
      // justifyContent: "center", // Center children vertically
      // alignItems: "center", // Center children horizontally
      // height: "140vh", // Full viewport height
      marginTop: "100px",
      fontFamily: "Open Sans, sans-serif"
    }}> 
   
    <Row noGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color:"#0C3C60"}}>
    {/* <Row noGutters style={{ color:"#0C3C60"}}> */}
    <Col lg={4} style={{ padding: 0 }} className="align-self-start" >
          <img 
            src={healthImage} 
            alt="Health Care Solution" 
            style={{ width: "100%", height: "auto" }}
            className={isImageLoaded ? 'image-grow-animation' : ''}
          />
        </Col>
        {/* Left Column for Text */}
        <Col lg={4} ref={viewRef} className={isTextLoaded ? 'text-slide-in-animation' : ''}>
          
        <h1 style={{ fontWeight: 500, marginBottom: "0.7rem" }} >Health Care Solution</h1>
          <p  className='health-p' style={{ fontStyle:"italic", lineHeight: "1.5",fontWeight: 400 }}>
          AMR Research estimates that between 10% and 20% of a typical hospital’s mobile assets are lost or stolen during their useful life with an average cost of nearly Rs 1,30,000 per item. RFLABS Healthcare system helps you to prevent it and save more money by reducing operational costs, streamline the workflow, provide efficient supply chain management and improve the quality and efficiency of care. Our salient features include:          </p>
          <div>
            {/* Feature List Starts Here */}
            <ul className='health-ul' style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Patient Safety/Wander Management:</strong>  Our safety solution ensures patients have freedom and flexibility within the facility but never wander into restricted or dangerous areas. All Tags comes with tamper detection feature.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Inventory management:</strong> Monitor utilization and track all the assets used in the hospital including real time inventory in ambulance. 100% ROI through inventory optimization and 30% reduction in on-hand inventory
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Infant Protection:</strong> With RFLABS Infant Protection solution, facilities can continually monitor infant locations, prevent infant abduction and ensure the correct matching of mothers and their babies. Our tags are water resistant to allow for bathing.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Improve workflow:</strong> Using our analytics and monitoring system we can see 48% reduction of staff time spent on administrative tasks and they can be diverted for other significant tasks.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Infection Control: </strong> Our system helps to reduce healthcare associated infections by Hand Hygiene Compliance Monitoring, Contact Tracing, Environmental Monitoring and Surgical Sterile Processing.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Children and Senior Citizens Care:</strong> In large hospitals, it becomes difficult to track children and elders who needs care. In case of emergency they can seek help with a click of a button.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Patient Data file tracking:</strong>Using our system, its easy to locate the data files of a patient and also personnel only with right access will be able to access it.
              </li>
                          </ul>
          </div>
        </Col>

        {/* Right Column for Image */}
        
      </Row>
      <style>
        {`
        .health-container {
          overflow: hidden;
        }
        
        @media (max-width: 373px) {
          .health-container {
            height: 340vh;
          }
        }
          @media (min-width: 374px) and (max-width: 576px) {
            .health-container {
              height: 260vh;
            }
          }
          @media (min-width: 577px) and (max-width: 768px) {
            .health-container {
              height: 130vh;
              // width: 95%;
            }
          }
          @media (min-width: 769px) and (max-width: 1025px) {
            .health-container {
              height: 160vh;
              // background:red;
            }
          }
          @media (min-width: 1025px) {
            .health-container {
              height: 150vh;
              // background:red;

            }
          }
        @media (max-width: 768px) {
          .health-container{
            // background: yellow;
            width: 90%;
            // height: 180vh;
          }
          
          h1 {
            font-size: 36px;
          }
          .health-p{
            font-size: 17px;
          }
          .health-ul{
            font-size: 16px;
          }
        }
        @media (min-width: 769px) {
          .health-container {
            width: 100%;
            // height: 100vh;
          }
          h1 {
            font-size: 27px;
          }
          .health-p{
            font-size: 12.5px;
          }
          .health-ul{
            font-size: 12px;
          }
        }
        @keyframes slideInFromRight {
  from {
    transform: translateX(100%); /* Start from off the right of the screen */
    opacity: 0;
  }
  to {
    transform: translateX(0); /* End at its natural position */
    opacity: 1;
  }
}

.text-slide-in-animation {
  animation: slideInFromRight 1s ease-in-out forwards; /* Adjust duration and easing to suit your needs */
}

        @keyframes grow {
          from {
            transform: scale(0.5); /* Start from a smaller size */
            opacity: 0; /* Start from fully transparent */
          }
          to {
            transform: scale(1); /* Scale to the natural size */
            opacity: 1; /* Fade in to fully opaque */
          }
        }
        
        .image-grow-animation {
          animation: grow 1s ease-in-out forwards; /* Smooth, more gradual animation */
        }
        
        `}
      </style>
    </Container>
  );
}

export default Health;

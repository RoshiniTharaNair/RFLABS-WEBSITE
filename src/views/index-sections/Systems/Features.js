import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

// Replace these with the correct image paths
import barcodeImage from 'assets/img/Barcode-Solution.jpeg';
import rfidImage from 'assets/img/RFID-Solution.jpg';
import cctvImage from 'assets/img/CCTV-solution.jpg';
import biometricImage from 'assets/img/Biometric-Solution.jpg';
import possytemImage from 'assets/img/POS-solution.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedCard } from './AnimatedCard';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom"; // Ensure this is imported


// Assuming you have three routes setup in your application
const routes = {
  barcode: 'barcode',
  rfid: 'rfid',
  cctv: 'cctv',
  biometric: 'bio-metric',
  possystem: 'pos-system'
};
const cardDetails = [
  {
    image: barcodeImage,
    title: 'Barcode',
    content: 'We provide complete digital barcode labeling solution. Our solutions include label stock, printers, label printing software and consumables. Our primary markets are Library, Electronics, Warehousing and Asset labeling. We offer a variety of label materials to meet your specific environment and product needs',
    route: routes.barcode,
  },
  {
    image: rfidImage,
    title: 'RFID',
    content: 'We are industry leaders in providing cost effective RFID solutions. From installing hardware (customized RFID tags, RFID readers, RFID antennas, RFID printers) to providing RFID application software, we are a one stop solution. We are currently serve manufacturing industries, educational institutions, healthcare and hospitality industries.',
    route: routes.rfid,
  },
  {
    image: cctvImage,
    title: 'CCTV',
    content: 'We pride ourselves in providing state of art Surveillance Security Systems. Our Surveillance Security Systems comes with variety of features like cloud recording, facial recognition, IR night vision, motion detection and 360-degree mobile control.',
    route: routes.cctv,
  },
  {
    image: biometricImage,
    title: 'Bio-Metric',
    content: 'We provide biometric authentication system in six areas—face recognition, iris recognition, fingerprint/palm print recognition, voice recognition and ear acoustic authentication—are the best of their class in the world. By combining multiple biometric authentication systems, our solutions bring about even more robust security.',
    route: routes.biometric,
  },
  {
    image: possytemImage,
    title: 'POS System',
    content: 'Our POS system will save you time and money. It is simple and easy to use. It can meet the needs of every type and size of retail and restaurant, whether you run a single shop or thousands of stores.',
    route: routes.possystem,
  },
];

function Features() {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "15px",
    minHeight: "225px" // 25% reduction from 300px
  };

  // Remove the fixed height and make the image height 25% of the card height
  const imgContainerStyle = {
    height: '30%', // Image height is 25% of the card height
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imgStyle = {
    width: '100%', // Make image width 100% to cover the container
    height: '100%', // Make image height 100% of the container
    objectFit: 'cover' // Ensures the image covers the area, may crop if necessary
  };

  // You may adjust the content height as needed, depending on your text content
  const contentStyle = {
    overflow: 'auto', // Allows scroll if content is too large
    padding: '0 13px', // Add some padding between text and other elements
  };

  const { featureId } = useParams(); // Use useParams hook to get the route parameter

  const location = useLocation(); // This hook gives you access to the current URL location object

  useEffect(() => {
    // This effect runs when the `location.hash` changes
    if (location.hash) {
      // Delay the scroll a little to allow page render
      setTimeout(() => scrollToElementWithOffset(location.hash, 100), 0);
    }
  }, [location]); // Depend on `location` to re-run the effect when it changes

  // Custom function to scroll to an element with a specific offset
  function scrollToElementWithOffset(hash, offset) {
    const id = hash.replace("#", ""); // Remove the hash symbol (#) to get the ID
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
  

  return (
    <Container fluid style={{ padding: '50px 0', color: "#0C3C60", fontFamily: "Open Sans, sans-serif", marginTop: "50px",justifyContent:"center",alignItems:"center",display:"flex" }}>
    <Row className='custom-row'>
       {cardDetails.map((detail, index) => (
         <Col id={detail.route} lg={4} md={6} sm={12} className="mb-4 d-flex align-items-stretch" key={index}>
           <AnimatedCard detail={detail} />
         </Col>
       ))}
    </Row>
    <style>
      {`
      @media (max-width: 699px) {
        .custom-row {
          width: 98%;
          // margin-right: auto;
          // margin-left: auto;
        }
      }

      @media (min-width: 700px) {
        .custom-row {
          width: 80%;
          // margin-right: auto;
          // margin-left: auto;
        }`}
      </style>
   </Container>
   
  );
}



export default Features;

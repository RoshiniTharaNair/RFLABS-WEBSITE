import React, { useRef, useState } from "react";
import { Container, Row, Col, FormGroup, Label, Input, Form } from 'reactstrap';
import { Button } from '@mui/material';
import { MdPlace, MdEmail, MdLocalPhone } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [hoverStates, setHoverStates] = useState({ place: false, phone: false, email: false });
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  

  const handleMouseEnter = (icon) => setHoverStates({ ...hoverStates, [icon]: true });
  const handleMouseLeave = (icon) => setHoverStates({ ...hoverStates, [icon]: false });
  const getAvatarStyle = (icon) => ({ backgroundColor: hoverStates[icon] ? '#3498db' : '#f5f6f7', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', });
  const getIconStyle = (icon) => ({ color: hoverStates[icon] ? '#f5f6f7' : '#3498db', fontSize: '18px', });

  React.useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const h1Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const colLeftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const colRightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };


  return (
    <Container id="contact" fluid style={{ backgroundColor: "#1D3557", color: "white", padding: "80px 20px 5px 20px" }}>
      <ToastContainer />
      <Row className="justify-content-center mb-5">
        <Col md={12} className="text-center">
          <motion.h1 initial="hidden" animate={controls} variants={h1Variants} style={{ fontSize: "2.5rem", fontFamily: "Poppins, sans-serif" }}>Contact Us</motion.h1>
        </Col>
      </Row>
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="justify-content-center" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Row className="justify-content-center gap-9" style={{width:"90%"}}> {/* Adjust the gap size as needed */}
      <Col sm={12} md={6} lg={4} className="d-flex mb-4">
            <motion.div className="d-flex flex-column h-100" variants={colLeftVariants} style={{  borderRadius:"2px",paddingLeft: "5%", borderRight: "2px solid white",fontFamily:"Open Sans, sans-serif",background:"white",color:"#0C3C60",padding:"30px 10px 10px 20px" }}>    
    <div style={{ display: 'flex', alignItems: 'center', }}>
    <div
          style={getAvatarStyle('place')}
          onMouseEnter={() => handleMouseEnter('place')}
          onMouseLeave={() => handleMouseLeave('place')}
        >
          <MdPlace style={getIconStyle('place')} />
        </div>    
     <div style={{ marginLeft: '10px' }}>
        <h2 style={{ color: '#0C3C60', margin: '0', fontWeight: 600, fontSize: '16px' }}>Coimbatore Office:</h2>
        <p style={{ color: '#627680', margin: '0',fontSize:"11px",fontWeight: 400 }}>2247,Trichy Rd, Singanallur, Tamil Nadu 641005</p>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center',padding:"25px 0 0 0" }}>
    <div
          style={getAvatarStyle('place')}
          onMouseEnter={() => handleMouseEnter('place')}
          onMouseLeave={() => handleMouseLeave('place')}
        >
          <MdPlace style={getIconStyle('place')} />
        </div>    
     <div style={{ marginLeft: '10px' }}>
        <h2 style={{ color: '#0C3C60', margin: '0', fontWeight: 600, fontSize: '16px' }}>Canadian  Office:</h2>
        <p style={{ color: '#627680', margin: '0',fontSize:"11px",fontWeight: 400 }}>218 Bedford Highway Suite #28 Halifax NS B3M2K3</p>
      </div>
    </div>
    
    <div style={{ display: 'flex', alignItems: 'center',padding:"25px 0 0 0" }}>
    <div
          style={getAvatarStyle('phone')}
          onMouseEnter={() => handleMouseEnter('phone')}
          onMouseLeave={() => handleMouseLeave('phone')}
        >
          <MdLocalPhone style={getIconStyle('phone')} />
        </div>
             <div style={{ marginLeft: '10px' }}>
        <h2 style={{ color: '#0C3C60', margin: '0', fontWeight: 600, fontSize: '16px' }}>Call:</h2>
        <p style={{ color: '#627680', margin: '0',fontSize:"11px",fontWeight: 400 }}>+91 7259533331</p>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center',padding:"25px 0 25px 0" }}>
    <div
          style={getAvatarStyle('email')}
          onMouseEnter={() => handleMouseEnter('email')}
          onMouseLeave={() => handleMouseLeave('email')}
        >
          <MdEmail style={getIconStyle('email')} />
        </div>
            <div style={{ marginLeft: '10px' }}>
        <h2 style={{ color: '#0C3C60', margin: '0', fontWeight: 600, fontSize: '16px' }}>Sales & Support:</h2>
        <p style={{ color: '#627680', margin: '0',fontSize:"11px",fontWeight: 400 }}>vikram@rflabs.in</p>
      </div>
    </div>
    </motion.div>
          </Col>

          <Col sm={12} md={6} lg={5} className="d-flex mb-4">
            <motion.div className="d-flex flex-column h-100"  variants={colRightVariants}>
          
          {/* <Col sm={10} md={6} lg={6} className="d-flex mt-md-2 " style={{background:"white",paddingLeft:"10px",marginTop:"10px",marginLeft:"10px"}}> */}
          <Container style={{ fontFamily: "Open Sans, sans-serif",background: "white", padding: "20px", color: "#0C3C60", width: "100%",fontSize:"12px" }}>
                <form ref={form} onSubmit={sendEmail}>
                {/* Form Groups for Name, Email, Phone, and Message */}
                <FormGroup row >
        <Col md={6} >
          <Label for="name">Your Name</Label>
          <Input type="text" name="name" id="name" style={{borderRadius:"0px"}} />
        </Col>
        <Col md={6}>
          <Label for="email">Your Email</Label>
          <Input type="email" name="email" id="email" style={{borderRadius:"0px"}} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md={12}>
          <Label for="phone">Phone</Label>
          <Input type="tel" name="phone" id="phone" style={{borderRadius:"0px"}} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md={12}>
          <Label for="message">Message</Label>
          <Input type="textarea" name="message" id="message" rows="12" style={{borderRadius:"0px",fontSize:"10px"}} />
        </Col>
      </FormGroup>
      <FormGroup row>
                          <Col md={12} className="text-center">
                          <Button type="submit" style={{ padding:"8px 15px", background: "#0C3C60", color: "white", fontSize:"11px", textTransform:"capitalize",borderRadius:"0px",fontWeight: 500,fontFamily:"Open Sans, sans-serif" }}>Send Message</Button>                  </Col>
                </FormGroup>
              </form>
            </Container>
            </motion.div>
          </Col>
                  </Row>
      </motion.div>
      {/* Footer Container */}
      <Container fluid 
 style={{ 
    color: "white", 
    // padding: "20px 10px", 
    marginTop:"40px",
    fontFamily: "Open Sans, sans-serif", 
    position: 'relative', // Add this line
    // bottom: '1px' // Add this line
 }}
 className="text-center">
 <p style={{ fontSize: "11px", fontWeight: 500 }}>
    © 2024 Copyright <strong>Rflabs</strong>. All Rights Reserved
 </p>
</Container>

      <style>
        {`
          @media (min-width: 768px) {
            /* For md screens and up */
            .contact-column {
              margin-left: 10px;
            }
          }

          @media (max-width: 767.98px) {
            /* For sm screens and below */
            .contact-column {
              margin-top: 10px;
            }
          }
          
          /* Ensures paddingLeft and background are always applied */
          .contact-column {
            background: white;
            padding-left: 10px;
          }
         .contact-info-col .info-container {
          border-radius: 2px;
          padding-left: 5%;
          border-right: 2px solid white;
          background: white;
          color: #0C3C60;
          padding: 30px 10px 10px 20px;
          font-family: "Open Sans", sans-serif;
        }

        .contact-info-col .info-row {
          display: flex;
          align-items: center;
          margin-bottom: 25px; /* Adjust spacing between items */
        }

        .contact-info-col .info-text {
          margin-left: 10px;
        }

        .contact-info-col .info-text h2 {
          color: #0C3C60;
          margin: 0;
          font-weight: 600;
          font-size: 1rem; /* Responsive font size */
        }

        .contact-info-col .info-text p {
          color: #627680;
          margin: 0;
          font-size: 0.875rem; /* Responsive font size */
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .contact-info-col .info-container {
            padding: 20px; /* Adjust padding for smaller screens */
          }
          .contact-info-col .info-text h2, .contact-info-col .info-text p {
            font-size: 0.75rem; /* Adjust font size for smaller screens */
          }
        }`}
      </style>
    </Container>
  );
}

export default Contact;

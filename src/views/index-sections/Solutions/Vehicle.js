import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import VehicleImage from 'assets/img/Vehicle-access.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

function Vehicle() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
  }, [inView1, inView2]);

  // Grow animation variants
  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  // Slide-in animation variants
  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Container fluid className='vehicle-container' style={{ display: "flex", flexDirection: "column", fontFamily: "Open Sans, sans-serif" }}>
      <Row noGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#0C3C60" }}>
        <Col lg={4} style={{ padding: 0 }} className="align-self-start">
          <motion.div
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={imageVariants}
          >
            <img
              src={VehicleImage}
              alt="Vehicle Solution"
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>
        </Col>

        <Col lg={4}>
          <motion.div
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={textVariants}
          >
              <h1 style={{ fontWeight: 500, marginBottom: "0.7rem" }}>Vehicle Access Control Solution</h1>
            <p className='vehicle-p' style={{  fontStyle: "italic", lineHeight: "1.5", fontWeight: 400 }}>
              RFLABS Vehicle Access Control System is apt for apartments and offices to automate their vehicle entry system because of its accuracy and faster entry/exit times avoiding the clog at the gates.
            </p>
          <div>
            {/* Feature List Starts Here */}
            <ul className='vehicle-ul' style={{ listStyle: "none", paddingLeft: 0}}>
              <li style={{ marginBottom: "1rem" }}>
              <FontAwesomeIcon icon="fal fa-check-circle" />
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Accuracy and Control:</strong>  Very accurate system allows only the permitted vehicles to enter and exit the premises.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Visitor parking management:</strong> Manage, provide access and charge the visitor parking space.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Security:</strong> To provide extra security purpose our system sends out an email every time the vehicle exists the gate.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Durable and waterproof system:</strong> All our RFID controllers, tags are all waterproof and comes with a warranty.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Ease of Use: </strong>  The Building Admin team would be able to remotely add/manage/deactivate Owner / Tenant’s Vehicle to this system with ease.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Reports:</strong> The system will generate reports on vehicle movements and will send an email to the admin team.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Flexibility: </strong>Our solution can be operated manually without access card in case of need (provision shall be given to security or authorized personals only).
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Support: </strong>In case of any issue arise in the system, we will have it fixed remotely unless if its for a change of parts.
              </li>
                          </ul>
                          </div>
                          </motion.div>
        </Col>
      </Row>
      <style>
        {`
        .vehicle-container {
          overflow: hidden;
        }
        
         
         @media (max-width: 373px) {
          .vehicle-container {
            height: 250vh;
          }
        }
          @media (min-width: 374px) and (max-width: 576px) {
            .vehicle-container {
              height: 190vh;
            }
          }
          @media (min-width: 577px) and (max-width: 768px) {
            .vehicle-container {
              height: 110vh;
            }
          }
          @media (min-width: 769px) and (max-width: 1025px) {
            .vehicle-container {
              height: 120vh;
            }
          }
          @media (min-width: 1025px) {
            .vehicle-container {
              height: 120vh;
            }
          }

         
         @media (max-width: 768px) {
          
          .vehicle-container{
            // background: green;
            width: 90%;
            // height: 110vh;
            // marginTop: 0px;
          }
          h1 {
            font-size: 36px;
          }
          .vehicle-p{
            font-size: 17px;
          }
          .vehicle-ul{
            font-size: 16px;
          }
        }
        @media (min-width: 769px) {
          .vehicle-container {
            width: 100%;
            // height: 120vh;
          }
          h1 {
            font-size: 27px;
          }
          .vehicle-p{
            font-size: 12.5px;
          }
          .vehicle-ul{
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

export default Vehicle;

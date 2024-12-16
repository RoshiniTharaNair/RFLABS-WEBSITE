import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TimeAttendanceImage from 'assets/img/Time-Attendance&HumanResourceSystem.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

function TimeAttendance() {
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
    <Container fluid className='time-container' style={{ display: "flex", flexDirection: "column",  fontFamily: "Open Sans, sans-serif" }}>
      <Row noGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#0C3C60" }}>
        <Col lg={4} style={{ padding: 0 }} className="align-self-start">
          <motion.div
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={imageVariants}
          >
            <img
              src={TimeAttendanceImage}
              alt="time Solution"
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
            <h1 style={{ fontWeight: 500, marginBottom: "0.7rem" }}>Time Attendance & Human Resource Solution</h1>
            <p className='time-p' style={{ fontStyle: "italic", lineHeight: "1.5", fontWeight: 400 }}>
            Our automated attendance and Human resource system provides ease, efficiency and accuracy in recording employees’ attendance. Salient features include:
</p>
          <div>
            {/* Feature List Starts Here */}
            <ul className='time-ul' style={{ listStyle: "none", paddingLeft: 0,}}>
              <li style={{ marginBottom: "1rem" }}>
              <FontAwesomeIcon icon="fal fa-check-circle" />
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong>Automation:</strong> With Our active RFID technology, no longer do employees need to sign in or out manually. Our system does it automatically.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Improve efficiency: </strong>   Human errors, unnecessary disputes, and tedious paper recording and data entry work can all be avoided, which in turn improved the overall efficiency.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Efficient Readers: </strong>  Our Readers can detect numerous tags at the same time which aids in situations where many employees enter the premises at the same time and all of their presence will be recorded.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Reports: </strong>  The system generates detailed reports on data collected and its statistics is useful for further analysis in respect of human resource planning and management.
              </li>
                             </ul>
                          </div>
                          </motion.div>
        </Col>
      </Row>
      <style>
        {`
          .time-container {
            overflow: hidden;
          }
         @media (max-width: 373px) {
          .time-container {
            height: 200vh;
          }
        }
          @media (min-width: 374px) and (max-width: 576px) {
            .time-container {
              height: 170vh;
            }
          }
          @media (min-width: 577px) and (max-width: 768px) {
            .time-container {
              height: 90vh;
            }
          }
          @media (min-width: 769px) and (max-width: 1025px) {
            .time-container {
              height: 90vh;
            }
          }
          @media (min-width: 1025px) {
            .time-container {
              height: 90vh;
            }
          }

          @media (max-width: 768px) {
          
            .time-container{
              // background: green;
              width: 90%;
              // height: 110vh;
              // marginTop: 0px;
            }
            h1 {
              font-size: 36px;
            }
            .time-p{
              font-size: 17px;
            }
            .time-ul{
              font-size: 16px;
            }
          }
          @media (min-width: 769px) {
            .time-container {
              width: 100%;
              // height: 120vh;
            }
            h1 {
              font-size: 27px;
            }
            .time-p{
              font-size: 12.5px;
            }
            .time-ul{
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

export default TimeAttendance;

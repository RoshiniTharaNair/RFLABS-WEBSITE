import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LibraryImage from 'assets/img/LibraryandOfficedocumentsmanagementsystem.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

function Library() {
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
    <Container fluid className='library-container' style={{ display: "flex", flexDirection: "column",  fontFamily: "Open Sans, sans-serif" }}>
      <Row noGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#0C3C60" }}>
        <Col lg={4} style={{ padding: 0 }} className="align-self-start">
          <motion.div
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={imageVariants}
          >
            <img
              src={LibraryImage}
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
            <h1 style={{ fontWeight: 500, marginBottom: "0.7rem" }}>Library and Office documents management solution</h1>
            <p className='library-p' style={{  fontStyle: "italic", lineHeight: "1.5", fontWeight: 400 }}>
            RFLABS documents management system is perfectly designed to provide high speed automatic document management, control of document stock and comprehensive tracking of documents at lower costs. Our salient features include:            </p>
          <div>
            {/* Feature List Starts Here */}
            <ul className='library-ul' style={{ listStyle: "none", paddingLeft: 0}}>
              <li style={{ marginBottom: "1rem" }}>
              <FontAwesomeIcon icon="fal fa-check-circle" />
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Progressive technology reduces cost and minimises delays:</strong> Quickly locate documents and monitor movement using our automated document management system.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Security: </strong>   Only authorized personnel will be able to access the documents. We provide various levels of readers for precise information and security.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Track history of documents: </strong>  Our system will provide accurate history of the document usage and records who checked in and checked out the document and where it is stored.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Prevent file loss: </strong>  Our system helps in reduction of misplaced or lost files.
              </li>
                             </ul>
                          </div>
                          </motion.div>
        </Col>
      </Row>
      <style>
        {`
          .library-container {
            overflow: hidden;
          }
         @media (max-width: 373px) {
          .library-container {
            height: 195vh;
          }
        }
          @media (min-width: 374px) and (max-width: 576px) {
            .library-container {
              height: 160vh;
            }
          }
          @media (min-width: 577px) and (max-width: 768px) {
            .library-container {
              height: 95vh;
            }
          }
          @media (min-width: 769px) and (max-width: 1025px) {
            .library-container {
              height: 100vh;
            }
          }
          @media (min-width: 1025px) {
            .library-container {
              height: 100vh;
            }
          }

         
         @media (max-width: 768px) {
          
          .library-container{
            // background: green;
            width: 90%;
            // height: 110vh;
            // marginTop: 0px;
          }
          h1 {
            font-size: 36px;
          }
          .library-p{
            font-size: 17px;
          }
          .library-ul{
            font-size: 16px;
          }
        }
        @media (min-width: 769px) {
          .library-container {
            width: 100%;
            // height: 120vh;
          }
          h1 {
            font-size: 27px;
          }
          .library-p{
            font-size: 12.5px;
          }
          .library-ul{
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

export default Library;

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WarehouseImage from 'assets/img/WarehouseandAssetManagement.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

function Warehouse() {
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
    <Container fluid className='warehouse-container' style={{ display: "flex", flexDirection: "column", fontFamily: "Open Sans, sans-serif" }}>
      <Row noGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#0C3C60" }}>
        <Col lg={4} style={{ padding: 0 }} className="align-self-start">
          <motion.div
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={imageVariants}
          >
            <img
              src={WarehouseImage}
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
            <h1 style={{ fontWeight: 500, marginBottom: "0.7rem" }}>Warehouse and Asset Management</h1>
            <p className='warehouse-p' style={{ fontStyle: "italic", lineHeight: "1.5", fontWeight: 400 }}>
            Our Warehouse management systems is designed comprehensively to mobilize, empower and optimize your business. It provides seamless visibility of inventory from the time it enters the warehouse till it leaves the facility. Our salient features include:            </p>
          <div>
            {/* Feature List Starts Here */}
            <ul className='warehouse-ul' style={{ listStyle: "none", paddingLeft: 0}}>
              <li style={{ marginBottom: "1rem" }}>
              <FontAwesomeIcon icon="fal fa-check-circle" />
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Asset Management:</strong>  RFLBS Asset Management software helps in identifying the locations of the assets and its movement, inventory forecasting, inventory valuation, inventory visibility, price forecasting quality and access control, replenishment, returns and defective goods, and demand forecasting.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Increase Productivity: </strong>  It helps in increasing productivity by accurate data capture, reduces costs, efficient order processing. It also helps in optimizing resources in terms of man power, equipment and space utilization.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} /> <strong> Modules:</strong> Our modules include Kitting (KANBAN), Inventory management, Receiving, Cross Docking, Put-away, Pick-and-Pack, Raw Material Issue, Work-In-Progress Tracking, Yard & Dock Management and Dispatching.
              </li>
                             </ul>
                          </div>
                          </motion.div>
        </Col>
      </Row>
      <style>
        {`
        .warehouse-container {
          overflow: hidden;
        }
         @media (max-width: 373px) {
          .warehouse-container {
            height: 210vh;
          }
        }
          @media (min-width: 374px) and (max-width: 576px) {
            .warehouse-container {
              height: 170vh;
            }
          }
          @media (min-width: 577px) and (max-width: 768px) {
            .warehouse-container {
              height: 90vh;
            }
          }
          @media (min-width: 769px) and (max-width: 1025px) {
            .warehouse-container {
              height: 100vh;
            }
          }
          @media (min-width: 1025px) {
            .warehouse-container {
              height: 100vh;
            }
          }

         
         @media (max-width: 768px) {
          
          .warehouse-container{
            // background: green;
            width: 90%;
            // height: 110vh;
            // marginTop: 0px;
          }
          h1 {
            font-size: 36px;
          }
          .warehouse-p{
            font-size: 17px;
          }
          .warehouse-ul{
            font-size: 16px;
          }
        }
        @media (min-width: 769px) {
          .warehouse-container {
            width: 100%;
            // height: 120vh;
          }
          h1 {
            font-size: 27px;
          }
          .warehouse-p{
            font-size: 12.5px;
          }
          .warehouse-ul{
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

export default Warehouse;

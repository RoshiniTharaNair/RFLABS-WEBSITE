import React from 'react';
import { Container, Row, Col, Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components'; // Import styled-components for hover effect

// Define styled component for Card with hover effect
const HoverCard = styled(Card)`
  transition: border-color 0.3s ease-in-out; // Smooth transition for the border color
  &:hover {
    border-bottom: 3px solid #0C3C60; // Blue color for the bottom border on hover
  }
`;

// Define your card styles here as they were previously
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

// Define your animation variants outside the component
const variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const AnimatedCard = ({ detail }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
   
    React.useEffect(() => {
       if (inView) {
         controls.start('visible');
       }
    }, [controls, inView]);
   
    return (
       <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={variants}
         className="mb-4 d-flex align-items-stretch"
         style={{ width: '100%' }} // Ensure the motion div occupies the full width
       >
         <HoverCard style={cardStyle}>
           <div style={imgContainerStyle}>
             <img src={detail.image} alt={detail.title} style={imgStyle} />
           </div>
           <h3 className='card-title' style={{ fontSize: "25px", fontWeight: 700, marginTop: '15px' }}>
             {detail.title}
           </h3>
           <div style={{...contentStyle, flex: 1, overflow: 'hidden'}}> {/* Make content flex grow to fill remaining space and prevent overflow */}
             <p className='card-p' style={{ fontSize: "15px", fontWeight: 500, textAlign: "left", color: "RGB(12, 60, 96,0.8)", lineHeight: "1.8em" }}>
               {detail.content}
             </p>
           </div>
           <div style={{ 
 position: 'absolute', 
 bottom: '15px', 
 width: '100%', 
 display: 'flex', // Use flexbox
 justifyContent: 'center', // Center horizontally
 alignItems: 'center', // Center vertically
 height: '50px' // Adjust the height as needed
}}>
           {/* <div style={{ position: 'absolute', bottom: '15px', width: '100%', background:"red" }}>  */}
           {/* Position the button at the bottom of the card */}
             <Link to='/#contact'>
               <Button className="mt-3 card-btn" style={{ background: "#0C3C60", color: "white", borderRadius: "0px", fontSize: "17px", padding: "9px 11px" }}>
                 Book Now
               </Button>
             </Link>
           </div>
         </HoverCard>
         <style>
          {`
          @media (max-width: 699px) {
            .card-title {
              font-size: 25px !important;

            }
            .card-p {
              font-size: 15px !important;

            }
            .card-btn {
              font-size: 17px !important;

            }
          }
    
          @media (min-width: 700px) {
            .card-title {
             font-size: 16px !important;
            }
            .card-p {
              font-size: 12px !important;

            }
            .card-btn {
              font-size: 13.5px !important;

            }
            `}
         </style>
       </motion.div>
    );
   };
   
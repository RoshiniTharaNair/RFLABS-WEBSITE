import React from "react";
import { Button } from "reactstrap";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div     id="about"
      className="main-approach justify-content-center" 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh", // Ensure full viewport height
        background: "#D1E0EB",
        padding: "50px 0"
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{
          // background:"red",  
          display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",}}
      >
        <h1 style={{ color: "#0C3C60", marginBottom: "25px", fontSize: "35px", fontWeight: 500 }}>ABOUT US</h1>
        <p style={{
            color: "rgba(12, 60, 96, 0.9)", 
            marginBottom: "25px", 
            fontSize: "11.5px", 
            lineHeight: "1.5em",
            fontWeight: 500,
            textAlign: "left", // Center align text for consistency
            letterSpacing: "0.03em",
            width: "96.5%", // Adjust based on responsiveness
            maxWidth: "600px" // Ensure it doesn't stretch too wide on larger screens
          }}
        >
          RFlabs.in is Indian subsidiary of our parent company RFLABS, based in Nova Scotia, Canada. We are a group of veteran engineers from Dalhousie University, who have worked together on a variety of projects in Information technologies, Security and Intelligence Community. Our mission is to provide customized solutions to our esteemed clients at affordable prices; without compromising on quality and having security and data quality at its foremost.
        </p>
        <Button style={{ background: "#0C3C60", color: "white", fontSize: "12px", padding: '8px 10px', borderRadius: "0px" }}>Read More</Button>
      </motion.div>
    </div>
  );
}

export default About;

import React, { useEffect, useState} from 'react';
import { Container, Row, Col, Card, Button } from 'reactstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function InfoCard({ title, description }) {
  const buttonVariants = {
    hover: { scale: 1.05 }, // Example hover effect
    initial: { scale: 1 }
  };

  // Assuming you want the whole card to grow slightly on hover
  const cardVariants = {
    initial: { scale: 0.95, opacity: 0, translateY: -50 },
    visible: { scale: 1, opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } } // Slight grow effect on hover
  }

  return (
    <Col xs={12} sm={12} md={6} lg={4} className="d-flex align-items-stretch" style={{ padding: "1%" }}>
      <motion.div initial="initial" whileInView="visible" whileHover="hover" variants={cardVariants} style={{ width: '100%', textAlign: 'center' }}>
        <Card style={{ backgroundColor: '#0C3C60', color: '#fff', padding: '2em 2em 0.5em 2em', fontFamily: "Open Sans, sans-serif", borderRadius: "0px", display: 'flex', flexDirection: 'column', height: '100%' }}>
          <h3 style={{ fontWeight: '400', color:"#D1E0EB", fontSize:"18px" }}>{title}</h3>
          <p style={{ fontSize:"11px", fontWeight: 400, lineHeight:"1.7em", textAlign:"left", flex: '1' }}>{description}</p>
          <motion.div variants={buttonVariants} id="team" >
            <Button style={{ background:"#39729B", color:"white", marginTop: 'auto', fontSize:"12px", padding:"5px 20px" }}>More info</Button>
          </motion.div>
        </Card>
      </motion.div>
    </Col>
  );
}


function Team() {
  // Add content for each card here
  const cardInfo = [
    {
      title: 'SOLUTIONS',
      description: 'We specialize in delivering turnkey RFID solutions, RFID software and wide spectrum of RFID hardware like RFID readers, tags & antennas. Our RFID solutions ensure operational efficiency, enhance workplace safety, minimize risk and improve control over your assets.'
    },
    {
      title: 'SYSTEMS',
      description: 'We streamline complex business operations and workflows and provide access control using barcode, CCTV, RFID AND Biometric systems. We pride ourselves in providing state of art Surveillance Security Systems.'
    },
    {
      title: 'SERVICES',
      description: 'We hear your needs. Based on your requirements, we design, develop, test and implement the system custom made for you. We are experts in providing cost effective solutions to our clients.'
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(new Array(cardInfo.length).fill(false));

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      // Update the animated state to true for all cards on first inView
      setAnimated(new Array(cardInfo.length).fill(true));
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Container className="custom-container" style={{ marginTop: "5%", marginBottom: "2%", background: "" }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={animated.every(a => a) ? 'visible' : 'hidden'}
        variants={cardVariants}
      >
        <Row className="d-flex align-items-stretch" noGutters>
          {cardInfo.map((card, index) => (
            <InfoCard key={index} title={card.title} description={card.description} />
          ))}
        </Row>
      </motion.div>
      <style>
        {`
        .custom-container {
          width: 100%;
        }
    
        @media (min-width: 992px) {
          .custom-container {
            width: 75%;
            margin-left: auto;
            margin-right: auto;
          }
        }`}
      </style>
    </Container>
 );
}


export default Team;
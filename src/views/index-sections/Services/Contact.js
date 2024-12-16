import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { FaHeart } from 'react-icons/fa'; // Importing Heart icon from react-icons

function Examples() {
  return (
    <Container fluid style={{ backgroundColor: "#0C3C60", color: "white", padding: "20px 10px", fontFamily:"Open Sans, sans-serif" }}>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize:"11px",fontWeight: 500 }}>© 2024 Copyright <strong>Rflabs</strong>. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Examples;

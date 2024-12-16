import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Container, Row } from "reactstrap";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="signup-main">
      <div className="section section-signup" style={{
          backgroundImage: `url(${require("assets/img/Snow.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          // minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Card className="apparels-card">
          <h2 className="apparels">
            DEVELOPING INNOVATIVE RFID SOLUTIONS
          </h2>
          <h2 className="achieve">
            ACHIEVING GROWTH
          </h2>
        </Card>
      </div>
      <style>
 {`
    .signup-main {
      margin-top: 0;
    }
    
    .apparels-card {
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
      padding: 20px;
      color: #0C3C60;
      background: rgba(255, 255, 255, 0.7);
      font-family: "Raleway, sans-serif";
    }
    
    .apparels, .achieve {
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      letter-spacing: 0.02em;
      margin-bottom: 10px;
    }
    
    .apparels {
      font-size: 0.75rem;
    }

    .achieve {
      font-weight: 800;
      font-size: 1.5rem;
      margin-top: 0;
    }
    
    @media (min-width: 768px) {
      .apparels {
        font-size: 1.25rem;
      }
      
      .achieve {
        font-size: 2.5rem;
      }
    }
    
    @media (min-width: 992px) {
      .apparels-card {
        max-width: 100%;
      }
      
      .achieve {
        font-size: 3rem;
      }
    }
    
    @media (min-width: 1024px) {
      .section-signup {
        min-height: 100vh; /* Adjust the height as needed */
      }
      .apparels-card {
        max-width: 100%;
      }
    }

    /* Add a media query for small screens */
    @media (max-width: 575px) {
      .section-signup {
        min-height: 50vh; /* Adjust the height as needed */
      }
    }
 `}
</style>

    </div>
  );
}

export default SignUp;

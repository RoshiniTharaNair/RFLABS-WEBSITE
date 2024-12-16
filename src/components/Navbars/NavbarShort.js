// Import React and various components and libraries
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Dropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Container,
} from "reactstrap";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/RFLabsLogo.png";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from 'react-router-hash-link';
import Overlay from "./Overlay";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function IndexNavbar() {
  // Define various state variables
  const [click, setClick] = useState(false); // Add a click state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const whiteTextColorClass = screenWidth < 1000 ? 'slate-text' : '';

  // Function to handle click event
  const handleClick = () => {
    setClick(!click); // Toggle the click state
  };

  // Define state for dropdown menus
  const [dropdowns, setDropdowns] = useState([
    { id: "solutions", isOpen: false },
    { id: "systems", isOpen: false },
  ]);

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };
  
  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Create a reference to the menu element
  const menuRef = useRef();

  // Use useEffect for side effects and event listeners
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Function to handle clicks outside of the menu
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    // Add a document click event listener
    document.addEventListener("mousedown", handler);

    // Add logic to set click to true when screen width is 1000px
    if (window.innerWidth >= 1000) {
      setClick(true);
    } else {
      setClick(false);
    }

    // Cleanup: remove event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  // Function to toggle a dropdown menu
  const toggleDropdown = (id) => {
    const updatedDropdowns = dropdowns.map((dropdown) => {
      if (dropdown.id === id) {
        return { ...dropdown, isOpen: !dropdown.isOpen };
      }
      return dropdown;
    });
    setDropdowns(updatedDropdowns);
  };

  const location = useLocation();

  // Function to determine if the current path matches the desired path
 const isActive = () => {
  return location.pathname === '/Home/solutions' && location.hash === '#health-care';
};
 // Function to determine if the current path matches the target for the "Vehicle Access Control Solution" link
 const isVehicleControlActive = () => {
  return location.pathname === '/Home/solutions' && location.hash === '#vehicle-control';
};

// Generalized function to determine if a given link is active based on its path and hash
const isLinkActive = (targetPath, targetHash) => {
  return location.pathname === targetPath && location.hash === targetHash;
};
     
const navigate = useNavigate();
// Image click handler to navigate to the root path
const onLogoClick = () => {
  navigate('/');
};
  return (
    <div ref={menuRef} >
 
 <Navbar
  className='navbar-top sticky-top'
//   expand="lg"
  style={{ maxWidth:"100%",background: "#0C3C60",
  fontFamily: "Open Sans, sans-serif",color: "#fff"
   }}
>
     
            
<Overlay show={click} />
      <Nav className="sticky-nav" navbar style={{ width: "100%", marginTop: "0%", background: "transparent" }}>
        <NavItem className={click ? "d-flex align-items-left justify-content-left sticky-border" : "d-flex align-items-left justify-content-left"}>
          <i
            className={click ? "nav-icon fas fa-times d-flex align-items-right justify-content-right mr-2 icon-color-close" : "nav-icon fas fa-bars d-flex align-items-right justify-content-right mr-2 icon-color-open"}
            onClick={handleClick}
            style={{  position: "absolute", right: "15px", cursor: "pointer" }}
          />
            <img className="nav-img" src={logo} alt="Logo" onClick={onLogoClick} /> {/* Include the image here */}
        </NavItem>
      </Nav>
</Navbar>


            {click && (
             <div style={{display: "flex",
             justifyContent: "center",
             alignItems: "center",}}>
             <div className="overlay" onClick={() => setClick(false)}></div>
             <Navbar
  className="navbar-second-top blur-effect"
  style={{
    background: "#0C3C60",
    borderRadius: "10px",
    maxWidth: "95vw",
    minHeight: "93vh",
    maxHeight: "80vh", // Set a maximum height
    display: "flex",
    flexDirection: "column", // Ensure the navbar content flows vertically
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontFamily: "Open Sans, sans-serif",
    marginLeft:"5px",
    overflowY: "auto" // Enable vertical scrolling
  }}
>
  <Nav
    className="d-flex align-items-start justify-content-start nav-second"
    navbar
    style={{ width: "100%", textAlign: "center" }}
  >
   
<NavItem className="">
  <NavLink>
  <HashLink to="/#team" tag={HashLink} smooth={true} className={`nav-p ${location.pathname === '/#team' ? 'active-link' : ''}`}
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
  >
    About
  </HashLink>
  </NavLink>
</NavItem>
   <NavItem style={{width:"100%",color:"white"}}>
    <div>
          <Dropdown
            // isOpen={dropdowns.find((d) => d.id === "solutions").isOpen}
            // onClick={menuClick("solutions")} 
            toggle={() => toggleDropdown("solutions")}
            nav
            // onMouseEnter={() => openDropdownOnMouseEnter("solutions")}
            // onMouseLeave={() => closeDropdownOnMouseLeave("solutions")}
          >     
          <DropdownToggle  nav className="nav-p" style={{ width: "100%",  padding: "0.5rem 1rem" }}
            onClick={() => toggleDropdown("solutions")} // Toggle dropdown on click
                      >
             <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "solutions").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0",width: "100%", display: "flex", justifyContent: "space-between",color:"white" }}
    >
    Solutions <FontAwesomeIcon icon={dropdowns.find((d) => d.id === "solutions").isOpen ? faAngleUp : faAngleDown} />
  </p>
            </DropdownToggle>

{dropdowns.find((d) => d.id === "solutions").isOpen && (
        <div style={{textAlign:"left",marginLeft:"35px"}}>      
        {/* <NavItem className="dropdown-option">
        <HashLink to="/Home/solutions#health-care" smooth={true} >
        Health Care Solution
        </HashLink>
                  </NavItem> */}
                  
                  <NavItem className="dropdown-option">
        <HashLink
          to="/Home/solutions#health-care"
          smooth={true}
          style={{ color: isLinkActive('/Home/solutions', '#health-care') ? "#009CEA" : "white" }}
        >
          Health Care Solution
        </HashLink>
      </NavItem>

      <NavItem className="dropdown-option">
        <HashLink
          to="/Home/solutions#vehicle-control"
          smooth={true}
          style={{ color: isLinkActive('/Home/solutions', '#vehicle-control') ? "#009CEA" : "white" }}
        >
          Vehicle Access Control Solution
        </HashLink>
      </NavItem>

                  <NavItem  className="dropdown-option" >
  <HashLink to="/Home/solutions#warehouse" smooth={true} 
          style={{ color: isLinkActive('/Home/solutions', '#warehouse') ? "#009CEA" : "white" }}
          >
                    Warehouse and Asset Management
                    </HashLink>
                  </NavItem>
                  <NavItem className="dropdown-option" >
      <HashLink to="/Home/solutions#library" smooth={true} 
          style={{ color: isLinkActive('/Home/solutions', '#library') ? "#009CEA" : "white" }}
        >

                    {/* <i className="now-ui-icons design_bullet-list-67 mr-1"></i> */}
                    Library and Office documents management Solution
                    </HashLink>
                  </NavItem>
                  <NavItem className="dropdown-option"                    
                  >
                      <HashLink to="/Home/solutions#time" smooth={true} 
                          style={{ color: isLinkActive('/Home/solutions', '#time') ? "#009CEA" : "white" }}
                        >                
                    Time Attendance & Human Resource Solution
                    </HashLink>
                  </NavItem>
                  
                  </div>
)}
          </Dropdown>
          </div>
          </NavItem>
        

<NavItem  style={{width:"100%"}}>
    <div>
<Dropdown
            // isOpen={dropdowns.find((d) => d.id === "systems").isOpen}
            toggle={() => toggleDropdown("systems")}
            // onClick={menuClick("systems")} 
            nav
          
          >         
          <DropdownToggle nav 
          className="nav-p" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 1rem"}}
         onClick={() => toggleDropdown("systems")} // Toggle dropdown on click
                      >
                     <p
    className={`dropdown-toggle-text ${dropdowns.find((d) => d.id === "systems").isOpen ? "blueText" : "white-text"}`}
    style={{ fontSize: "100%", margin: "0", padding: "5px 0",width: "100%", display: "flex", justifyContent: "space-between", color:"white"}}
    >
    Systems <FontAwesomeIcon icon={dropdowns.find((d) => d.id === "systems").isOpen ? faAngleUp : faAngleDown} />
  </p>
            </DropdownToggle>
            {dropdowns.find((d) => d.id === "systems").isOpen && (
        <div style={{textAlign:"left",marginLeft:"35px"}}>      
        {/* Dropdown items */}
  <NavItem className="dropdown-option" >
  <HashLink to="/Home/software#barcode" smooth={true} 
          style={{ color: isLinkActive('/Home/software', '#barcode') ? "#009CEA" : "white" }}
    >

  Barcode
  </HashLink>
  </NavItem>
  <NavItem className="dropdown-option" >
  <HashLink to="/Home/software#rfid" smooth={true} 
          style={{ color: isLinkActive('/Home/software', '#rfid') ? "#009CEA" : "white" }}
    >

  RFID
  </HashLink>
  </NavItem>
  <NavItem className="dropdown-option">
        <HashLink to="/Home/software#cctv" smooth={true} 
                style={{ color: isLinkActive('/Home/software', '#cctv') ? "#009CEA" : "white" }}
          >
  CCTV
  </HashLink>
  </NavItem>
  <NavItem className="dropdown-option">
        <HashLink to="/Home/software#bio-metric" smooth={true} 
                style={{ color: isLinkActive('/Home/software', '#bio-metric') ? "#009CEA" : "white" }}
          >
  Bio-Metric
  </HashLink>
  </NavItem>
  <NavItem className="dropdown-option" >
        <HashLink to="/Home/software#pos-system" smooth={true} 
                style={{ color: isLinkActive('/Home/software', '#pos-system') ? "#009CEA" : "white" }}
          >
  POS System 
  </HashLink>
  </NavItem>
  
</div>
            )}
            </Dropdown>
</div>
          </NavItem>

<NavItem className="">
  <NavLink>
  <HashLink to="/services" tag={Link} smooth={true} className={`nav-p ${location.pathname === '/services' ? 'active-link' : ''}`}
    style={{ fontSize: "100%", margin: "0", padding: "0 0" }}
  >
    Services
  </HashLink>
  </NavLink>
</NavItem>
<NavItem className="">
  <NavLink>
    <HashLink
      to="/#contact"
      tag={HashLink}
      smooth={true}
      className={`nav-p ${location.hash === '#contact' ? 'active-link' : ''}`}
      style={{
        fontSize: "100%",
        margin: "0",
        padding: "0 0"
      }}
    >
      Contact
    </HashLink>
  </NavLink>
</NavItem>

          </Nav>

</Navbar>
      </div>

)}
    
              

{/* </Container> */}

<style>
  {`
  
  
   @media (max-width: 373px) {
    .nav-icon {
      margin-top: 1%;
      font-size: 18px;
    }
    .nav-img{
      width:32%;
    }
    .navbar-second-top {
      top: 7%;
      // left: 1%;
      // right: 0;
      // position: fixed;
      // z-index: 1000; /* Adjust the z-index as needed */
    }
    .nav-second{
      top: -60px;
    }
    .nav-p{
      font-size: 16px !important;
      // color: white !important;
    }
    .active-link {
      text-decoration: underline;
      font-size: 16px !important;
      // color: white !important;
    }
    .slate-text{
      font-size: 16px !important;
      font-weight: 400 !important;
    
    
    }
    .blueText {
      font-size: 16px !important;
      // margin-left: -5% !important;
    }
    .white-text {
      font-size: 16px !important;
      margin-left: -2% !important;
    }
    .dropdown-option{
      font-size: 16px !important;
      margin-bottom: 7% !important;
    }
  }
    @media (min-width: 374px) and (max-width: 576px) {
      .nav-icon {
        margin-top: 1%;
        font-size: 18px;
      }
      .nav-img{
        width:32%;
      }
      .navbar-second-top {
        top: 7%;
        // left: 1%;
        // right: 0;
        // position: fixed;
        // z-index: 1000; /* Adjust the z-index as needed */
      }
      .nav-p{
        font-size: 16.5px !important;
        // color: white !important;
      }
      .active-link {
        text-decoration: underline;
        font-size: 16.5px !important;
        // color: white !important;
      }
      .slate-text{
        font-size: 16.5px !important;
        font-weight: 400 !important;
      
      
      }
      .blueText {
        font-size: 16.5px !important;
        // margin-left: -5% !important;
      }
      .white-text {
        font-size: 16.5px !important;
        margin-left: -2% !important;
      }
      .dropdown-option{
        font-size: 16.5px !important;
        margin-bottom: 7% !important;
      }
    }
    @media (min-width: 577px) and (max-width: 768px) {
      .nav-icon {
        margin-top: 2%;
        font-size: 25px;
      }
      .nav-img{
        width:22%;
      }
      .navbar-second-top {
        top: 6.1%;
        // left: 1%;
        // right: 0;
        // position: fixed;
        // z-index: 1000; /* Adjust the z-index as needed */
      }
      .nav-p{
        font-size: 15px !important;
        // color: white !important;
      }
      .active-link {
        margin-top: 3% !important;
        margin-left: 3% !important;
        text-decoration: underline;
        font-size: 15px !important;
        // color: white !important;
      }
      .slate-text{
        font-size: 15px !important;
        font-weight: 400 !important;
      
      
      }
      .blueText {
        font-size: 15px !important;
        // margin-left: -5% !important;
      }
      .white-text {
        font-size: 15px !important;
        margin-left: -0.8% !important;
      }
      .dropdown-option{
        font-size: 20px !important;
        margin-bottom: 3% !important;
      }
    }
    
 .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity here */
  z-index: 999; /* Ensure it's above other content */
}
.blur-effect {
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  backdrop-filter: blur(8px); /* Apply the blur effect */
  // z-index: 999; /* Ensure it's above other content */
}
/* Add these CSS rules to your existing CSS */
.icon-color-close {
  color: white; /* Set color to white */
}

.icon-color-open {
  color: #009CEA; /* Set color to blue */
}

.sticky-nav {
  position: sticky;
  // top: -18%;
  // margin-top: -10%;
  background-color: #fff; /* Set the background color as needed */
  z-index: 1000; /* Adjust the z-index as needed */
}

/* Add this CSS to your stylesheets or in a <style> tag */

.dropdown-menu {
  background-color: rgb(29, 33, 43); 
  font-size: 120%;
  font-weight: 200;
  // color: white; 
  border-radius: 20px;
  position: absolute;
}
.dropdown-menu:hover {
  background-color: rgb(29, 33, 43); 
  // color: white; 
  border-radius: 20px;
  position: absolute;
}


.custom-dropdown-toggle p {
  font-size: 120%;
}
.white-text {
  // color: #fff;
  font-size: 60%;
  padding-left: 3%;
  padding-top: 1%;

}
.slate-text{
  color: #000;

}
.blueText {
  color: #008FBF; /* Change this to your desired blue color */
}
@media only screen and (max-width: 280px) {
  .navbar-brand-h{
    font-size: 17px !important;
  }
  .navbar-top {
    // top: -9%;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1000; /* Adjust the z-index as needed */
  }
  .navbar-second-top {
    // top: -9%;
    left: 1%;
    right: 0;
    position: fixed;
    z-index: 1000; /* Adjust the z-index as needed */
  }
 .navbar-logo{
  padding-left: 2% !important;
 }

 
.service-p{
  // margin-left: -5% !important;

}

  
     }
/* CSS for screen width 280px to 540px */
@media only screen and (min-width: 281px) and (max-width: 766px) {
  .navbar-brand-h{
    font-size: 20px !important;
  }
  
  .navbar-top {
    // top: -9%;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1000; /* Adjust the z-index as needed */
  }
  .navbar-second-top {
    // top: -9%;
    left: 1%;
    right: 0;
    position: fixed;
    z-index: 1000; /* Adjust the z-index as needed */
  }
 .navbar-logo{
  padding-left: 2% !important;
 }

 .service-p{
  // margin-left: -5% !important;

}

  
     }
@media only screen and (min-width: 767px) and (max-width: 912px) {
  .navbar-top {
    // top: -3%;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1000; /* Adjust the z-index as needed */
  }
  .navbar-second-top {
    // top: -9%;
    left: 1%;
    right: 0;
    position: fixed;
    z-index: 1000; /* Adjust the z-index as needed */
  }
  .navbar-brand-h{
    font-size: 20px !important;
  }
  .nav-p{
    font-size: 20px !important;
    // padding-bottom: 3% !important;
    // color: white;
  }
  .active-link {
    padding-top: 6% !important;
    margin-left: 3% !important;
    text-decoration: underline;
    font-size: 20px !important;
  }
  .navbar-logo{
   }
 
   .slate-text{
    // color: #000;
    // margin-bottom: -2% !important;
    font-size: 20px !important;
    font-weight: 400 !important;
    padding-left: 5% !important;
    // padding-bottom: 3% !important;

  }
  .blueText {
    // color: #000; /* Change this to your desired blue color */
    font-size: 20px !important;
    // padding-bottom: 3% !important;


  }
  .white-text {
    font-size: 20px !important;
    // padding-bottom: 3% !important;


  }
 
  
     }
     .dropdown-toggle-text {
      display: flex;
      align-items: center; /* Align vertically in the middle */
      justify-content: space-between;
    }

    .dropdown-toggle-text .blueText {
      margin-right: 5px; /* Add spacing between text and icon */
      // padding-bottom: 3% !important;

    }
    

    .sticky-border {
      position: sticky;
      // top: 0;
      // background-color: white; /* Add a background color if needed */
      // z-index: 1; /* You may need to adjust the z-index based on your layout */
      // border-bottom: 0.5px solid #ccc; /* Adjust border properties as needed */
    }
    .hr-line{
      border-bottom: 1px solid #000; /* Adjust the color and width as needed */
      width: 100%; /* Set the width to 100% to span the entire width of the NavItem */
      
    }

    @media only screen and (min-width: 1024px) {
      .navbar-logo{
       }
    }
    

  
  ` 
  }
</style>

    </div>
);
}

export default IndexNavbar;

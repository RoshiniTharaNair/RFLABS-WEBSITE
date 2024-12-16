import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarShort from "./NavbarShort";
import SignUp from "views/index-sections/SignUp";
import { Avatar } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';
import logo from "../../assets/img/RFLabsLogo.png";
import { useNavigate } from "react-router-dom";


function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [click, setClick] = useState(false); // Add a click state

  const [modal, setModal] = useState(false);
  const menuRef = useRef();

  
  const [dropdowns, setDropdowns] = useState([
    { id: "solutions", isOpen: false },
    { id: "systems", isOpen: false },
  ]);
  const toggleDropdown = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
      )
    );
  };

 
  
  const openDropdownOnMouseEnter = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: true } : dropdown
      )
    );
  };

  const closeDropdownOnMouseLeave = (dropdownId) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: false } : dropdown
      )
    );
  };



  useEffect(() => {
   
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 1000) {
        setClick(true);
      } else {
        setClick(false);
      }      
    };
  
    handleResize(); // Initial call to set the click state
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
 
  const navigate = useNavigate();


  return (
    <div ref={menuRef}>
      {screenWidth >= 1200 || click ? ( // Check screenWidth or click state
     <Navbar className="fixed-top" expand="lg" style={{background:"#0C3C60", fontFamily: "Open Sans, sans-serif" }}>
        <Container fluid>
          <Collapse
            className="navbar-collapse justify-content-start"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar style={{paddingLeft:"35px", marginTop:"-1.5%",marginBottom:"-1.5%"}}>
            <NavbarBrand
    onClick={() => {
      navigate('/')
      setModal(true)
    }}
    className=""
    id="navbar-brand"
    style={{ }}
  >
                   <img src={logo} alt="Logo" style={{ maxWidth: "175px" }} /> {/* Include the image here */}
     
  </NavbarBrand>
             
            </Nav>
          </Collapse>

          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar style={{paddingRight:"30px",marginTop:"-1.5%",marginBottom:"-1.5%"}}>
           
            <NavItem>
                <NavLink to="" tag={Link} className="nav-link" style={{  }}>
                <HashLink to="/#team" smooth={true} >

                  <p style={{  fontWeight: 600, color: "#fff",paddingTop:"8%"  }}>About</p>
                  </HashLink>
                </NavLink>
              </NavItem>

              {/* <NavItem>
                <NavLink to="" tag={Link} className="nav-link mr-3" style={{  }}>
                <HashLink to="/#contact" smooth={true} style={{textDecoration:"none",fontWeight: 600, color: "#fff",}}>
                      Contact
                    </HashLink>
                </NavLink>
              </NavItem> */}

              <NavItem>
                <Dropdown
                  isOpen={dropdowns.find((d) => d.id === "solutions").isOpen}
                  toggle={() => toggleDropdown("solutions")}
                  nav
                  onMouseEnter={() => openDropdownOnMouseEnter("solutions")}
                  onMouseLeave={() => closeDropdownOnMouseLeave("solutions")}
                >
                  <DropdownToggle nav className="custom-dropdown-toggle" style={{ fontFamily: "Open Sans, sans-serif" }}>
                  <HashLink to="/Home/solutions" smooth={true} style={{fontWeight: 600, color: "#fff",}}>
                Solutions
                    </HashLink>                 
                     </DropdownToggle>
                     <DropdownMenu
  className={`custom-dropdown-menu ${open ? 'active' : 'inactive'}`}
  style={{
    backgroundColor: "#09314f",
    textAlign: "left", // Align menu items to the left
  }}
>
  <Container style={{
    color:"#fff"
  }}>
    {/* Dropdown items */}
    <DropdownItem to="/Home/solutions#health-care" tag={HashLink}  style={{fontSize:"12px"}}>
      Health Care Solution
    </DropdownItem>
    <DropdownItem
     to="/Home/solutions#vehicle-control" tag={HashLink} 
      style={{fontSize:"12px"}}
    >
      Vehicle Access Control Solution
    </DropdownItem>
    <DropdownItem
     to="/Home/solutions#warehouse" tag={HashLink} 
      style={{fontSize:"12px"}}
    >
      Warehouse and Asset Management
    </DropdownItem>
    <DropdownItem
      to="/Home/solutions#library" tag={HashLink} 
      style={{fontSize:"12px"}}
    >
      Library and Office documents management Solution
    </DropdownItem>
    <DropdownItem
      to="/Home/solutions#time" tag={HashLink} 
      style={{fontSize:"12px"}}
    >
      Time Attendance & Human Resource Solution
    </DropdownItem>
  </Container>
</DropdownMenu>

                </Dropdown>
              </NavItem>
      
              <NavItem>
                <Dropdown
                  isOpen={dropdowns.find((d) => d.id === "systems").isOpen}
                  toggle={() => toggleDropdown("systems")}
                  nav
                  onMouseEnter={() => openDropdownOnMouseEnter("systems")}
                  onMouseLeave={() => closeDropdownOnMouseLeave("systems")}
                >
                  <DropdownToggle nav className="custom-dropdown-toggle" style={{ fontFamily: "Open Sans, sans-serif" }}>
                  <HashLink to="/Home/software" smooth={true} style={{fontWeight: 600, color: "#fff",}}>
                Systems
                    </HashLink>                 
                     </DropdownToggle>
                     <DropdownMenu
  className={`custom-dropdown-menu ${open ? 'active' : 'inactive'}`}
  style={{
    backgroundColor: "#09314f",
    textAlign: "left", // Align menu items to the left
  }}
>
  <Container style={{
    color:"#fff"
  }}>
    {/* Dropdown items */}
    <DropdownItem to="/Home/software#barcode" tag={HashLink} style={{fontSize:"12px"}}>
      Barcode
    </DropdownItem>
    <DropdownItem
      to="/Home/software#rfid"
      tag={HashLink}
      style={{fontSize:"12px"}}
    >
      RFID
    </DropdownItem>
    <DropdownItem
      to="/Home/software#cctv"
      tag={HashLink}
      style={{fontSize:"12px"}}
    >
      CCTV
    </DropdownItem>
    <DropdownItem
      to="/Home/software#bio-metric"
      tag={HashLink}
      style={{fontSize:"12px"}}
    >
      Bio-Metric
    </DropdownItem>
    <DropdownItem
      to="/Home/software#pos-system"
      tag={HashLink}
      style={{fontSize:"12px"}}
    >
      POS System
    </DropdownItem>
  </Container>
</DropdownMenu>

                </Dropdown>
              </NavItem>
      
              <NavItem>
                <NavLink to="" tag={Link} className="nav-link" style={{  }}>
                <HashLink to="/services" smooth={true} style={{textDecoration:"none",fontWeight: 600, color: "#fff",}}>
                      Services
                    </HashLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="" tag={Link} className="nav-link mr-3" style={{  }}>
                <HashLink to="/#contact" smooth={true} style={{textDecoration:"none",fontWeight: 600, color: "#fff",}}>
                      Contact
                    </HashLink>
                </NavLink>
              </NavItem>


            </Nav>
          </Collapse>
        </Container>
<style>
  {`

.menu-trigger dropdown-toggle{
  position: absolute;
  top: 20px;
  right: 20px;
  height: 80%;
  width: 120px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.custom-dropdown-menu.active{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: 1000ms ease;
}

.custom-dropdown-menu.inactive{
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: 1000ms ease;
}

  .custom-dropdown-menu a {
  text-decoration: none; 
  border-bottom: 2px solid transparent; 
  transition: border-bottom 0.3s ease-in-out;
  color: #899DA3; 


}
.nav-link a:hover,.nav-link p:hover{
  font-size: 12.5px;
  color: white;
  font-weight: bold !important;
}

  .nav-item p{
    color: #d4d4d4;
    font-size: 12.5px;
  }
  .nav-link a{
    color: #d4d4d4;
    font-size: 12.5px;
  }
  .nav-item p:hover{
    color: #899DA3;
  }
  .nav-item:hover{
    color: #899DA3;
    background: transparent;
  }
  .nav-item p{
    color: #899DA3;
  }
  ` 
  }
</style>
</Navbar>
) : <NavbarShort />} 

</div>
);
}

export default IndexNavbar;

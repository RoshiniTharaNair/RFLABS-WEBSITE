import React,{ useEffect, useRef} from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// sections for this page
import Contact from "./Contact"
import SolutionsPage from "./Solution1";
import Health from "./Health";
import Vehicle from "./Vehicle";
import Warehouse from "./Warehouse";
import Library from "./Library";
import TimeAttendance from "./TimeAttendance";


function Index() {
  const location = useLocation(); // This hook gives you access to the current URL location object

  useEffect(() => {
    // This effect runs when the `location.hash` changes
    if (location.hash) {
      // Delay the scroll a little to allow page render
      setTimeout(() => scrollToElementWithOffset(location.hash, 100), 0);
    }
  }, [location]); // Depend on `location` to re-run the effect when it changes

  // Custom function to scroll to an element with a specific offset
  function scrollToElementWithOffset(hash, offset) {
    const id = hash.replace("#", ""); // Remove the hash symbol (#) to get the ID
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
    
      <IndexNavbar />
      {/* <SearchModal isOpen={searchModalOpen} toggleSearchModal={toggleSearchModal} /> Display the SearchModal */}
      {/* <SignUp /> */}
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <SolutionsPage />
          <div id="health-care">

          <Health />
          </div>
          <div id="vehicle-control"> {/* This ID should match the hash in the URL */}

          <Vehicle />
          </div>
          <div id="warehouse"> {/* This ID should match the hash in the URL */}

          <Warehouse />
          </div>
          <div id="library"> {/* This ID should match the hash in the URL */}

          <Library />
          </div>
          <div id="time"> {/* This ID should match the hash in the URL */}

          <TimeAttendance />
          </div>
                   
        </div>
        <div style={{width:"99%"}}>
        <Contact />

        </div>
      </div>
    </>
  );
}

export default Index;

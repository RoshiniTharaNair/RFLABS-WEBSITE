import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// sections for this page
import Home1 from "./index-sections/Home/Home1.js";
import About from "./index-sections/Home/About.js";
import Team from "./index-sections/Home/Team.js";
import SignUp from "./index-sections/SignUp.js";
// import FileList from "./index-sections/Reading Materials/FileList.js";
import { useLocation } from "react-router-dom";

import Contact from "./index-sections/Home/Contact.js";

function Index() {
  // React.useEffect(() => {
  //   document.body.classList.add("index-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("index-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // });
  return (
    <>
    
      <IndexNavbar />
  
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
        
          <Home1 />
          
          <Team />
          {/* <div style={{background:"#D1E0EB"}}> */}

          <About />
          {/* </div> */}

                   
        </div>
        <Contact />
      </div>
    </>
  );
}

export default Index;

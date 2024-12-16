import React,{ useEffect} from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// sections for this page
import Contact from "./Contact"
import SystemsPage from "./Systems1";
import Features from "./Features";

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

  const hash = window.location.hash;

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
    
      <IndexNavbar />
      {/* <SearchModal isOpen={searchModalOpen} toggleSearchModal={toggleSearchModal} /> Display the SearchModal */}
      {/* <SignUp /> */}
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <SystemsPage />
          <Features />
         
                   
        </div>
        <div style={{width:"99.5%",background:"#0C3C60"}}>
        <Contact />

        </div>
      </div>
    </>
  );
}

export default Index;

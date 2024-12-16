import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// sections for this page
import Services from "./Services1";
import Contact from "./Contact";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <IndexNavbar />
      {/* Other components like SearchModal or SignUp could be here */}
      <div style={{ flex: 1 }}>
        <div className="wrapper">
          <div className="main">
            <Services />
          </div>
        </div>
      </div>
      {/* <div className="footer" style={{
          display: "flex",
          alignItems: "flex-end", // Keeps it at the bottom
          justifyContent: "center", // Centers it horizontally
      }}> */}
        <Contact />
      {/* </div> */}
    </div>
  );
}

export default Index;

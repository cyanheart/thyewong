import React from "react";
import Particles from "react-particles-js";
import Products from "./products.jsx";
import ContactUs from "./contactUs.jsx";

import params from "../particlesjs-config.json";
const Home = () => {
  return (
    <React.Fragment>
      <Particles canvasClassName="particlesCSS" params={params} />
      <div className="text-center h-100" style={{ paddingTop: "100px" }}>
        <div
          style={{ maxWidth: "42em" }}
          className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
        >
          {/* <header className="masthead mb-auto">
            <div className="inner"></div>
          </header> */}
          <main role="main" className="inner cover">
            <h1
              className="cover-heading"
              style={{ color: "#00378a", fontSize: "5em" }}
            >
              Thye Wong
            </h1>
            <p style={{ fontSize: "1rem" }}>
              Since the establishment of this company in 1991, we have been
              making our best efforts to serve the general industries sector
              base on the theme "inifiate automation creating a better
              production for all factories".
            </p>
          </main>
        </div>
      </div>
      <Products />
      <ContactUs />
    </React.Fragment>
  );
};

export default Home;

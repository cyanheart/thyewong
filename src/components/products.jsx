import React from "react";
import controlComponentImg from "../images/controlComponentsImage.png";
import limitSwitchesImg from "../images/limitSwitches.png";
import towerLightsImg from "../images/towerLights.png";
import hoistSwitchesImg from "../images/hoistSwitches.png";
import terminalsImg from "../images/terminals.png";
const Products = () => {
  return (
    <React.Fragment>
      <div className="container text-center">
        <div className="row text-center">
          <div className="col my-5">
            <h1
              className="cover-heading"
              style={{ color: "#00378a", fontSize: "5em" }}
            >
              Products
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-md-6 mt-3">
            <img
              src={controlComponentImg}
              alt="ccimg"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
          <div className="col col-12 col-md-6 mt-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f3f3f3",
                borderRadius: "2%",
                padding: "15px",
                height: "100%",
              }}
            >
              <div>
                <h1>Control Component</h1>
                <p className="lead">
                  The operating head and contact block are detachable. The
                  protection structure for this series is IP65(ICE144) for
                  waterproof, oil tight and dust proof in harsh environment
                  except twin-touch push button and illuminated push button
                  switches are IP40
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-md-6 mt-3">
            <img
              src={limitSwitchesImg}
              alt="ccimg1"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
          <div className="col col-12 col-md-6 mt-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f3f3f3",
                borderRadius: "2%",
                padding: "15px",
                height: "100%",
              }}
            >
              <div>
                <h1>Limit Switches</h1>
                <div className="lead text-left">
                  <ul>
                    <li>two circuit double break</li>
                    <li>
                      rigit die cast switch housing. Made up of zinc alloy and
                      reinforced plastic
                    </li>
                    <li>small sized, oil tight, waterproof</li>
                    <li>
                      Inbuilt with a micro switch with double read structure for
                      longer mechanical service life
                    </li>
                    <li>Larger Over Travel operations</li>
                    <li>Catherer design for easy wiring</li>
                    <li>Many types of actuator</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col col-12 col-md-6 mt-3">
            <img
              src={towerLightsImg}
              alt="ccimg"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
          <div className="col col-12 col-md-6 mt-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f3f3f3",
                borderRadius: "2%",
                padding: "15px",
                height: "100%",
              }}
            >
              <div>
                <h1>Tower Light</h1>
                <p className="lead">
                  Internal spring suspension can avoid damage to the bulb due to
                  machine vibration. Flexible wiring design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-md-6 mt-3">
            <img
              src={hoistSwitchesImg}
              alt="ccimg1"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
          <div className="col col-12 col-md-6 mt-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f3f3f3",
                borderRadius: "2%",
                padding: "15px",
                height: "100%",
              }}
            >
              <div>
                <h1>Hoist Switches</h1>
                <p className="lead">
                  can control three phases motor directly, no need to use
                  magnetic switch. easy wiring. This switch is waterproof and
                  made out of ABS housing. Suitable for outdoor application.
                  Unique mechanical interlock design to prevent short circuit.
                  Can be used with emergency switch, pilot lamp, push button
                  switch or key switch.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-md-6 mt-3">
            <img
              src={terminalsImg}
              alt="ccimg"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
          <div className="col col-12 col-md-6 mt-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f3f3f3",
                borderRadius: "2%",
                padding: "15px",
                height: "100%",
              }}
            >
              <div>
                <h1>Terminals</h1>
                <p className="lead">
                  Terminal material: Copper<br></br> Plating: Tin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;

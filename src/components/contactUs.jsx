import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHome,
  faFax,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col d-flex flex-column">
            <div className="row text-center">
              <div className="col my-5">
                <h1
                  className="cover-heading"
                  style={{ color: "#00378a", fontSize: "5em" }}
                >
                  Contact Us
                </h1>
              </div>
            </div>
            <div className="row">
              <table className="table" style={{ margin: "0px" }}>
                <tbody>
                  <tr>
                    <td>
                      <div className="row justify-content-center">
                        <FontAwesomeIcon
                          icon={faPhone}
                          size="2x"
                          color="#00378a"
                        />
                        <span style={{ marginLeft: "10px" }} className="lead">
                          603-79811087
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="row justify-content-center">
                        <FontAwesomeIcon
                          icon={faFax}
                          size="2x"
                          color="#00378a"
                        />
                        <span style={{ marginLeft: "10px" }} className="lead">
                          603-79809429
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="row justify-content-center">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="2x"
                          color="#00378a"
                        />
                        <span style={{ marginLeft: "10px" }} className="lead">
                          thyewong@po.jaring.my
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <div className="row justify-content-center">
                        <FontAwesomeIcon
                          icon={faHome}
                          size="2x"
                          color="#00378a"
                        />
                        <span style={{ marginLeft: "10px" }} className="lead">
                          15, Jalan 1/116B, Kuchai Entrepreneurs' Park, Off
                          Jalan Kuchai Lama, 58200 Kuala Lumpur, Malaysia
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row flex-grow-1">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBWdbGDHs5ZC-SBl8NQdKMBAuJiYyVy4rQ",
                  language: "en",
                }}
                defaultCenter={{ lat: 3.089968, lng: 101.689508 }}
                center={{ lat: 3.089968, lng: 101.689508 }}
                defaultZoom={16}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {
                  let marker = new maps.Marker({
                    position: { lat: 3.089968, lng: 101.689508 },
                    map,
                    title: "Thye Wong Sdn. Bhd.",
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;

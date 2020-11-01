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
                >
                  Contact Us
                </h1>
              </div>
            </div>
            <div className="row" style={{paddingBottom:'15px'}}>
              <div className='col-12 col-md-4 d-flex justify-content-center'>
                <div>   <FontAwesomeIcon
                          icon={faPhone}
                          size="2x"
                          color="#00378a"
                        />
                        <span style={{ marginLeft: "10px" }} className="lead">
                          603-79811087
                        </span></div>
           
              </div>
              <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div>
              <FontAwesomeIcon
                          icon={faFax}
                          size="2x"
                          color="#00378a"
                        />
                        <span style={{ marginLeft: "10px" }} className="lead">
                          603-79809429
                        </span>
              </div>
              </div>
              <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div>
              <FontAwesomeIcon
                          icon={faEnvelope}
                          size="2x"
                          color="#00378a"
                        />
                        <span style={{ marginLeft: "10px" }} className="lead">
                          thyewong@po.jaring.my
                        </span>
              </div>
              </div>
        
              </div>
              <div className='row' style={{ paddingBottom:'15px'}}>
                <div className='col d-flex justify-content-center'>
                  <div>
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
                </div>
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
                  // eslint-disable-next-line
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

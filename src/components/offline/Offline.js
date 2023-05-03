import React from "react";
import "./Offline.scss";
import { HiOutlineStatusOffline } from "react-icons/hi";

const Offline = () => {
  return (
    <div className="Offline">
      <div className="container">
        <div className="content">
          <div className="offline-logo">
            <HiOutlineStatusOffline />
          </div>
          <h2>No internet</h2>
          <p>Try:</p>
          <ul>
            <li>Checking the network cables, modem, and router</li>
            <li>Reconncting to Wi-Fi</li>
          </ul>
          <h5 className="message">ERR_INTERNET_DISCONNECTED</h5>
        </div>
      </div>
    </div>
  );
};

export default Offline;

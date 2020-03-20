import React from "react";
import PropTypes from "prop-types";

export default function InfoBar({ room }) {
  return (
    <div>
      <div>
        <img src="/" alt="online" />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
          <img src="/" alt="close" />
        </a>
      </div>
    </div>
  );
}

InfoBar.propTypes = {
  room: PropTypes.string
};
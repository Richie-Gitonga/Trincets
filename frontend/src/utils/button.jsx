import React from "react";

const ActionButton = ({ handleClick, icon }) => {
  <button onClick={handleClick} className="rounded-lg p-2">
    <span className="material-icons-round">{icon}</span>
  </button>;
};

export default ActionButton;

// Button.js

import Styles from "./Button.module.css";
import React from "react";

function Button({ text, link }) {
  const handleClick = () => {
    // Open the link in a new tab/window when the button is clicked
    window.open(link, '_blank');
  };

  return (
    <button className={Styles.btn} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;

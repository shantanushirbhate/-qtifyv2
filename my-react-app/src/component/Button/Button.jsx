import React from "react";
import styles from "./Button.module.css";

function Button({ type = "button", className = "" }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}

    >
      Give Feedback
    </button>
  );
}

export default Button;

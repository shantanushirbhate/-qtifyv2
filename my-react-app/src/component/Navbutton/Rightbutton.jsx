import React from "react";
import styles from "./NavButton.module.css";
import { ReactComponent as RightArrow } from "../../assets/right.png";

function RightNavButton({ className }) {
  return (
    <div className={`${styles.navButton} ${className}`}>
      <RightArrow />
    </div>
  );
}

export default RightNavButton;

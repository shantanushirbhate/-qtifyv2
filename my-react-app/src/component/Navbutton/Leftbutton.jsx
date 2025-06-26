import LeftArrow from "../../assets/left.svg";
import styles from "./Navbutton.module.css"

function LeftNavButton({ className }) {
  return (
    <div className={`${styles.navButton} ${className}`}>
      <img src={LeftArrow} alt="Left Arrow" />
    </div>
  );
}
export  default  LeftNavButton
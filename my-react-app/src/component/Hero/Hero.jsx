import React from "react";
import styles from "./Hero.module.css";
import Heroimage from '../../assets/vibrating-headphone 1 (2).jpg'

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          className="headphone"
          src={Heroimage}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;

// import React from "react";
// import Heroimage from "../../assets/vibrating-headphone 1 (2).jpg";

// function Herocomponent() {
//   return (
//     <div style={{ textAlign: "center", padding: "2rem" }}>
//       <p>100 Thousand Songs, ad-free</p>
//       <p>Over thousands podcast episodes</p>
//       <img
//         src={Heroimage}
//         alt="Vibrating Headphones"
//         style={{ maxWidth: "100%", height: "auto", marginTop: "1rem" }}
//       />
//     </div>
//   );
// }

// export default Herocomponent;

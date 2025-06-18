import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Navbarlogo.png";
import SearchIcon from "@mui/icons-material/Search";

function Navbarcomponent({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* <Link to="/"> */}
      <img src={Logo} alt="Logo" className={styles.logo} />
      {/* </Link> */}
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} />
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
      </div>

      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbarcomponent;

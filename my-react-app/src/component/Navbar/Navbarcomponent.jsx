import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Styles from "./Navbar.module.css"
import Logo from "../../assets/Navbarlogo.png";
import SearchIcon from "@mui/icons-material/Search";

function Navbarcomponent({ searchData }) {
  return (
    <nav className={Styles.navbar}>
      {/* <Link to="/"> */}
      <img src={Logo} alt="Logo" className={Styles.logo}  />
      {/* </Link> */}
      <div className={Styles.searchContainer}>
        {/* <SearchIcon className={Styles.searchIcon} /> */}
        <Search
          placeholder="Search a album of your choice"
          searchData={searchData}
        />
      </div>

      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbarcomponent;

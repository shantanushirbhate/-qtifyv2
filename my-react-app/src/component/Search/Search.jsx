import React from "react";
import SearchIcon from "../../assets/search-icon.svg";
import styles from "./Search.module.css";

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={search}></input>
      <button className={styles.searchButton} type="submit">
        <img src={SearchIcon} alt="Search" />
      </button>
    </form>
  );
};

export default Search;

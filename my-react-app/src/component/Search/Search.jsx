
import React, { useState } from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({ placeholder, searchData }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchData(value);
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className={styles.searchInput}
        placeholder={placeholder}
      />
            <div className="verticl-line" ></div>

      <SearchIcon className={styles.searchIcon} />
    </div>
  );
}

export default Search;

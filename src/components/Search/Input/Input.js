import React, { useState, useEffect } from "react";
import "./Input.scss";

import { MOCK } from "../../../mock";

const Input = ({ device }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    let results = [];

    if (searchTerm !== "") {
      results = MOCK.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className={`${device}SearchContainer`}>
      <label
        id="inputSearch"
        className={`${device}SearchContainer__inputSearch`}
      >
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={handleChange}
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </label>
      {searchResults.length > 0 && (
        <ul className="productsList">
          {searchResults.map((item) => (
            <li key={item.code_color}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;

import React from "react";

import "./search-input.styles.scss";

export const SearchInput = ({ ...others }) => {
  return (
    <form className="search">
      <input type="search" className="search__input" {...others} />
    </form>
  );
};

import React from "react";

import "./Button.styles.scss";

export const ButtonPrimary = ({ children, className, ...otherProps }) => {
  return (
    <button className={`btn btn--primary ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

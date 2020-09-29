import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/footer-logo.svg";

import "./Footer.styles.scss";

export const Footer = () => {
  return (
    <footer class="footer">
      <Logo className="footer__logo" />
    </footer>
  );
};

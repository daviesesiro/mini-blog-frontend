import React from "react";

import { ReactComponent as ReactLogo } from "../../assets/svgs/react.svg";
import { ReactComponent as NodeLogo } from "../../assets/svgs/nodelogo.svg";
import { ReactComponent as ThreeFlames } from "../../assets/svgs/threeFlames.svg";

export const Mid = () => {
  return (
    <section className="mid-section container">
      <ReactLogo className="mid-section__item" />
      <NodeLogo className="mid-section__item" />

      <ThreeFlames class="mid-section__item center" />

      <ReactLogo className="mid-section__item" />
      <NodeLogo className="mid-section__item" />
    </section>
  );
};

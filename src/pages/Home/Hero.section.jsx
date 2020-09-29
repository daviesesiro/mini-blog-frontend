import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Illustration } from "../../assets/svgs/illustration.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svgs/logo-facebook.svg";
import { ReactComponent as GithubLogo } from "../../assets/svgs/logo-github.svg";
import { ReactComponent as TwitterLogo } from "../../assets/svgs/logo-twitter.svg";
import { ReactComponent as InstagramLogo } from "../../assets/svgs/logo-instagram.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <Illustration className="illustration" />
      </div>
      <div className="hero__content">
        <h1 className="heading-1">Hi,</h1>
        <h2 className="heading-2">
          Davies Esiro
          <span className="decor">
            Here
            <span aria-label="a waving hand emoji" role="img">
              👋🏼
            </span>
          </span>
        </h2>
        <p className="paragraph-1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        </p>
        <div className="hero-social">
          <Link className="hero-social__link" to="#">
            <FacebookLogo className="hero-social__logo" />
          </Link>
          <Link className="hero-social__link" to="#">
            <TwitterLogo className="hero-social__logo" />
          </Link>
          <Link className="hero-social__link" to="#">
            <InstagramLogo className="hero-social__logo" />
          </Link>
          <Link className="hero-social__link" to="#">
            <GithubLogo className="hero-social__logo" />
          </Link>
        </div>
      </div>
    </section>
  );
};

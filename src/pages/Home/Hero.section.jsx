import React from "react";

import { motion } from "framer-motion";

import { ReactComponent as Illustration } from "../../assets/svgs/illustration.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svgs/logo-facebook.svg";
import { ReactComponent as GithubLogo } from "../../assets/svgs/logo-github.svg";
import { ReactComponent as TwitterLogo } from "../../assets/svgs/logo-twitter.svg";
import { ReactComponent as InstagramLogo } from "../../assets/svgs/logo-instagram.svg";

const contentVariants = {
  start: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { straggerChildren: 1, duration: 0.5 },
  },
};

export const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1.01,
          transition: { type: "spring", yoyo: "inifity", duration: 1 },
        }}
        whileHover={{ scale: 1.05 }}
        className="hero__image"
      >
        <Illustration className="illustration" />
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="start"
        animate="animate"
        className="hero__content"
      >
        <h1 className="heading-1">Hi,</h1>
        <h2 className="heading-2">
          <span className="decor">Welcome to my thoughts</span>
          <span aria-label="a waving hand emoji" role="img">
            😀
          </span>
        </h2>
        <p className="paragraph-1">
          My name is Davies Esiro. I am Web developer | Web Designer. Over here
          (in my freetime) posts my tech related topics
        </p>
        <div className="hero-social">
          <a
            className="hero-social__link"
            href="https://facebook.com/davies.toluojurere/"
            rel="noopener noreferrer"
            rel="_blank"
          >
            <FacebookLogo className="hero-social__logo" />
          </a>
          <a
            className="hero-social__link"
            href="https://twitter.com/ojurereoluwad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo className="hero-social__logo" />
          </a>
          <a
            className="hero-social__link"
            href="https://instagram.com/ted_opi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo className="hero-social__logo" />
          </a>
          <a
            className="hero-social__link"
            href="http://github.com/daviesesiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo className="hero-social__logo" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

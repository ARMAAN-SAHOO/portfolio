import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Armaan Sahoo</h1>
        <p className={styles.description}>
        An aspiring backend developer with hands-on experience through personal and academic projects.As a fresher, I'm eager to apply my skills to real-world applications and grow as a developer.
        </p>
        <a href="mailto:armaansahoo6@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/armaan.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

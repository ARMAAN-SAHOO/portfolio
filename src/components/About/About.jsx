import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/male.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Java Backend Developer</h3>
              <p>
                I have strong knowledge in Java,Spring Boot and Hibernate. I enjoy building robust backend systems and am eager to start my professional journey.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Quick Learner</h3>
              <p>
                I’m passionate about technology and always looking to expand my skills in backend development and related technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Career-Ready</h3>
              <p>
                I am actively seeking opportunities to contribute, grow, and gain real-world experience as a software developer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

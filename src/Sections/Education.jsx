import { useState } from "react";
import styles from "./Education.module.css";
export function Education() {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.edu} id="experience" data-aos="fade-up">
      <h1 className="bright-white">Experience & Education</h1>
      <div className={styles.contain}  data-aos="fade-up">
        <div>
          <div className={styles.head} style={show? {backgroundColor: "rgba(180,85,17,1)"}: null} onClick={() => setShow(true)}>
            Course
          </div>
          <div className={styles.head} style={!show? {backgroundColor: "rgba(180,85,17,1)"}: null} onClick={() => setShow(false)}>
            B.tech
          </div>
        </div>
        {show ? (
          <div className={styles.desc}>
            <h3>Frontend Development Course</h3>
            <p className="bright-text">April, 2022 - April, 2023</p>
            <ul className="bright-text">
              <li>Relevel By Unacademy</li>
              <li>Data structure and algorithms</li>
              <li>Class Representative Of Batch fe6</li>
            </ul>
          </div>
        ) : (
          <div className={styles.desc}>
           <h3>Bachelor of Technology</h3>
            <p className="bright-text">August, 2017 - September,2021</p>
            <ul className="bright-text">
              <li>Rajkiya Engineering College, Bijnor</li>
              <li>Civil Engineering</li>
              <li>CGPA:- <b className="bright-text">7.91</b></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

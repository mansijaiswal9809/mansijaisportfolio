import styles from "./TechStack.module.css";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiTailwindcss
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

export function TechStack() {
  return (
    <div className={styles.techStack} id="tech-skills">
      <h1>Tech Stack</h1>
      <div className={styles.techStackgrid}>
        <div  data-aos="fade-up" data-aos-offset="300"  data-aos-duration="2000" data-aos-delay="0">
          <SiHtml5 size={50} color="red" />
          HTML
        </div>
        <div  data-aos="fade-up" data-aos-offset="300"  data-aos-duration="2000"  data-aos-delay="100">
          <IoLogoCss3 size={60} color="#264de4"/>
          CSS
        </div>
        <div  data-aos="fade-up" data-aos-offset="300"  data-aos-duration="2000"  data-aos-delay="200">
          <SiJavascript size={50} color="#F0DB4F"/>
          JavaScript
        </div>
        <div  data-aos="fade-up" data-aos-offset="300"  data-aos-duration="2000"  data-aos-delay="300">
          <GrReactjs size={50} color="#61DBFB"/>
          React JS
        </div>
        <div  data-aos="fade-up" data-aos-offset="300"  data-aos-duration="2000"  data-aos-delay="400">
          <SiRedux size={50} color="#764abc" />
          Redux
        </div>
        <div  data-aos="fade-up" data-aos-offset="300"  data-aos-duration="2000"  data-aos-delay="500">
          <SiTailwindcss size={50} color="green" />
          Tailwind
        </div>
      </div>
    </div>
  );
}

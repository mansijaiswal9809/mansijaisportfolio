import { AiFillLinkedin } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import styles from "./GetIntouch.module.css"
export function GetInTouch(){
    return <div className={styles.touch} id="contact"  data-aos="fade-up">
        <h1>Get In Touch</h1>
        <div className={styles.link} >
        <div  className="hover"><a href="https://github.com/mansijaiswal9809" target="_blank" ><FiGithub size="2rem" /></a></div>
        <div  className="hover"><a href="https://www.linkedin.com/in/mansi-jaiswal-8b3669216" target="_blank"><AiFillLinkedin size="2rem" /></a></div>
        </div>
        
        <a className="s-dark-text hover" href="mailto:mansijaiswal1235@gmail.com">manisjaiswal1235@gmail.com</a>
        <br />
        <a className="s-dark-text hover" href="tel:+918006222897">+91-8006222897</a>
        <br />
        <br />
        <p style={{color:"purple"}}>Designed & built by Mansi Jaiswal</p>
        </div>

}
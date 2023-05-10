import styles from "./Projects.module.css";
const data = [
  {
    name: "V-mate",
    github: "https://github.com/mansijaiswal9809/V-Mate",
    deploy: "https://v-mate-mansijaiswal9809.vercel.app",
    desc: "A video Streaming React App where one can watch all related viedo they search for, this App uses External API called rapid API.",
    tech:["React JS", "JavaScript", "HTML", "CSS"],
    img:"vmate.png"
  },
  {
    name: "Teerex-Store",
    github: "https://github.com/mansijaiswal9809/teerexstore",
    deploy: "https://teerex-store-mansijaiswal9809.vercel.app/",
    desc: "This is a RESPONSIVE E-commerce Application with Filter, Search, Add to cart, Login & Logout functionalities.",
    tech:["React JS", "JavaScript", "HTML","Tailwind CSS","Redux Toolkit", "Auth0"],
    img:"teerex.png"
  },
  {
    name: "Shopsio",
    github: "https://github.com/mansijaiswal9809/shopsio",
    deploy: "https://shopsio-mansijaiswal9809.vercel.app/",
    desc: "This is a RESPONSIVE E-commerce Application with Filter, Search, Add to cart, Login & Logout functionalities.",
    tech:["React JS", "JavaScript", "HTML","Tailwind CSS","Auth0"],
    img:"shopsio.png"
  },
  {
    name: "Weather Application",
    github: "https://github.com/mansijaiswal9809/weather-app",
    deploy: "https://weather-app-mansijaiswal9809.vercel.app/",
    desc: "ReactJS Weather Application where one can search for places they want the weather data for.",
    tech:["React JS", "JavaScript", "HTML","CSS"],
    img:"weather.png"
  },
];

export function Projects() {
  return (
    <div className={styles.project} id="project" data-aos="fade-up">
      <div data-aos="fade-up">
        <h1>Projects</h1>
      </div>
      {data.map((elem, i) => (
          <div
            data-aos="fade-up"
            className={styles.box}
            key={i}
          >
            <div className={styles.imgDiv}>
              <img src={elem.img} alt="p1" width="100%" height="100%" />
            </div>
            <div className={styles.desc}>
              <div
                className={styles.num}
              >
                <h4>0{i + 1}</h4>
              </div>
              <div className={styles.headbox}>
                <p className="bright-white">Featured Project</p>
                <h2>{elem.name}</h2>
              </div>
              <div className={styles.descbox}>
                <span className="s-dark-text">{elem.desc}</span>
              </div>
              <div className={styles.tech}>
                {elem.tech.map((item,i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
              <div className={styles.linkbox}>
                <button className={styles.button} variant="contained" ><a href={elem.github} target="_blank" rel="noopener noreferrer">View Github</a></button>
                <button className={styles.button}  variant="contained"><a href={elem.deploy} target="_blank" rel=" noopener noreferrer">View Website</a></button>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

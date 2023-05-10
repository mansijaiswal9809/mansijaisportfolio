import {
  Link,
} from "react-scroll";
import { LogoAni } from "./LogoAni";

const links = [
  {
    path: "about",
    title: "About",
  },
  {
    path: "tech-skills",
    title: "Tech",
  },
  {
    path: "project",
    title: "Projects",
  },
  {
    path: "contact",
    title: "Contact",
  },
];
export function Navbar() {
  return (
    <div id="navbar">
      <div>
        <Link
          activeClass="active"
          to="introduc"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          <LogoAni />
        </Link>
      </div>
      <div className="opacity">
        {links.map((elem) => (
          <Link
            key={elem.title}
            className="bright-white hover"
            activeClass="active"
            to={elem.path}
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
          >
            {elem.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="about" id="about" >
      <div data-aos="fade-up"><h1 className="bright-white">About me</h1></div>
      <div>
        <div className="bright-white" data-aos="fade-up">
          <p>
          A committed front-end developer willing to add her skills and expertise to your organisation. Having a deep grasp of the most latest web development tools and frameworks, confident in her ability to construct effective and dynamic apps that meet the expectations of today's fast-paced market. Also delighted to contribute her problem-solving skills and attention to detail to every assignment. Committed to developing scalable, maintainable, and user-friendly high-quality code.
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <br />
          <div
            style={{ display: "flex", marginLeft: "30px", gap: "70px" }}
            className="bright-text"
            data-aos="fade-up">
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux Toolkit</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Material UI</li>
            </ul>
          </div>
        </div>

        <div className="profile" data-aos="fade-up">
          <img src="mansi.jpg" alt="pic" width="100%" />
        </div>
      </div>
    </div>
  );
}

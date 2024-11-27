import { skillsData } from "../../jsons/skills";
import "./styles.css";
const AboutComponent = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div
        className="rn-service-area rn-section-gap section-separator"
        id="about"
      >
        <div className="white-version container">
          <div className="row">
            <div className="col-md-5 col-sm-12 white-version contact-about">
              <div className="white-version contact-about-area">
                <div className="thumbnail">
                  <img
                    src="/main/ethan.png"
                    alt="contact-img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-7 col-sm-12">
              <div
                className="contact-input"
                data-aos-delay="600"
                style={{ height: "100%" }}
              >
                <div
                  className="contact-form-wrapper"
                  style={{ boxShadow: "none" }}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="white-version section-title text-center">
                        <h2 className="title">About Me</h2>
                      </div>
                    </div>
                  </div>
                  <div className="inner">
                    <div className="content">
                      <p className="content-text">
                        I am a Full Stack Developer with 8 years of experience
                        delivering high-quality, scalable solutions. Skilled in
                        both frontend and backend development, I leverage
                        technologies like React, Node.js, TypeScript, and
                        Next.js to build dynamic interfaces and robust
                        server-side logic. Proficient in cloud computing (AWS)
                        and database management (MongoDB, MySQL, PostgreSQL), I
                        focus on optimizing performance and ensuring application
                        scalability. Open to relocation, I am eager to tackle
                        new challenges and contribute effectively to team
                        success.
                      </p>
                      <div
                        id="professional"
                        role="tabpanel"
                        aria-labelledby="professional-tab"
                      ></div>
                    </div>
                  </div>
                  <a
                    className="rn-btn"
                    target="_blank"
                    style={{ boxShadow: "none" }}
                    href="./resume/manish_resume.pdf"
                  >
                    {<span>DOWNLOAD RESUME</span>}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="personal-experience-inner">
            <div className="row row--40">
              {skillsData.map((item) => (
                <div
                  key={item.name}
                  // style={{ paddingBottom: "20px" }}
                  className="col-lg-4 col-md-6 col-12"
                >
                  <div className="progress-wrapper" style={{ padding: 0 }}>
                    <div className="content">
                      <div className="progress-charts">
                        <h6
                          className="heading heading-h6"
                          style={{ textAlign: "left" }}
                        >
                          {item.name}
                        </h6>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft"
                            data-wow-duration="0.5s"
                            data-wow-delay=".3s"
                            role="progressbar"
                            style={{ width: `${item.value}%` }}
                            aria-valuenow={item.value}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="percent-label">{item.value}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutComponent;

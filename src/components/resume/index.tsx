import "./styles.css";
import { experiences } from "../../jsons/experience";
import { certifications } from "../../jsons/certifications";

const ResumeComponent = () => {
  return (
    <div
      className="rn-resume-area rn-section-gap section-separator"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={100}
              data-aos-once="true"
              className="section-title text-center"
            >
              <span className="subtitle">7.5+ Years of Experience</span>
              <h2 className="title">My Resume</h2>
            </div>
          </div>
        </div>
        <div className="row mt--45">
          <div className="col-lg-12">
            <ul
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={100}
              data-aos-once="true"
              className="rn-nav-list nav nav-tabs"
              id="myTabs"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="education-tab"
                  data-toggle="tab"
                  href="#education"
                  role="tab"
                  aria-controls="education"
                  aria-selected="true"
                >
                  education
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="experience-tab"
                  data-toggle="tab"
                  href="#experience"
                  role="tab"
                  aria-controls="experience"
                  aria-selected="false"
                >
                  experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="Certifications-tab"
                  data-toggle="tab"
                  href="#Certifications"
                  role="tab"
                  aria-controls="Certifications"
                  aria-selected="false"
                >
                  Certifications
                </a>
              </li>
            </ul>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-once="true"
              className="rn-nav-content tab-content"
              id="myTabContents"
            >
              <div
                className="tab-pane show active fade single-tab-area"
                id="education"
                role="tabpanel"
                aria-labelledby="education-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="content">
                        <div className="experience-list">
                          <div className="resume-single-list">
                            <div className="inner">
                              <div
                                className="heading"
                                // style={{ alignItems: "start" }}
                              >
                                <div className="title">
                                  <h4>Bachelor of Technology</h4>
                                  <span>
                                    Punjab Technical University (2013 - 2017)
                                  </span>
                                </div>
                                <div className="date-of-time">
                                  <span>4.80/5</span>
                                </div>
                              </div>
                              <p className="description">
                                Bachelor of Technology Punjab Technical
                                University (2013 - 2017) B.Tech in Computer
                                Science and Engineering (CSE), skilled in
                                programming (C, C++, Java, Python), software
                                development, data structures, algorithms, and
                                database management. Experienced in application
                                development with strong problem-solving skills.
                                Adaptable to emerging technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade "
                id="professional"
                role="tabpanel"
                aria-labelledby="professional-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row row--40">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="progress-wrapper" style={{ padding: 0 }}>
                        <div className="content">
                          <span className="subtitle">professional</span>
                          <h4 className="maintitle">Design Skill</h4>
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">PHOTOSHOT</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.5s"
                                data-wow-delay=".3s"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">100%</span>
                              </div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">FIGMA</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.6s"
                                data-wow-delay=".4s"
                                role="progressbar"
                                style={{ width: "95%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">95%</span>
                              </div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">ADOBE XD</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.7s"
                                data-wow-delay=".5s"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">60%</span>
                              </div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">
                              ADOBE ILLUSTRATOR
                            </h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.8s"
                                data-wow-delay=".6s"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">70%</span>
                              </div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">DESIGN</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.9s"
                                data-wow-delay=".7s"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">90%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <div className="progress-wrapper">
                        <div className="content">
                          <span className="subtitle">Features</span>
                          <h4 className="maintitle">Development Skill</h4>
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">HTML</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.5s"
                                data-wow-delay=".3s"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">85%</span>
                              </div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">CSS</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.6s"
                                data-wow-delay=".4s"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">JAVASCRIPT</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.7s"
                                data-wow-delay=".5s"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">90%</span>
                              </div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">SOFTWARE</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.8s"
                                data-wow-delay=".6s"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">75%</span>
                              </div>
                            </div>
                          </div>

                          <div className="progress-charts">
                            <h6 className="heading heading-h6">PLUGIN</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.9s"
                                data-wow-delay=".7s"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="percent-label">70%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="experience"
                role="tabpanel"
                aria-labelledby="experience-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="content">
                        <div
                          className="experience-list"
                          style={{ textAlign: "left" }}
                        >
                          {experiences.map((item) => (
                            <div className="resume-single-list" key={item.name}>
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4>{item.name}</h4>
                                    <span>{item.designation}</span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>{item.duration}</span>
                                  </div>
                                </div>
                                <p className="description">
                                  {item.rolesAndResponsibilities.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="Certifications"
                role="tabpanel"
                aria-labelledby="Certifications-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="content" style={{ textAlign: "left" }}>
                        <div className="experience-list">
                          {certifications.map((item) => (
                            <div
                              key={item.name}
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay="300"
                              data-aos-once="true"
                              className="resume-single-list"
                            >
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4>{item.name}</h4>
                                    <span>{item.company}</span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>{item.duration}</span>
                                  </div>
                                </div>
                                <p className="description">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;

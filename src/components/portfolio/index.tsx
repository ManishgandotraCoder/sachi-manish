import { projects } from "../../jsons/projects";

const PortfolioComponent = ({
  setOpenedProject,
}: {
  setOpenedProject: any;
}) => {
  return (
    <div
      className="rn-portfolio-area portfolio-style-three rn-section-gap section-separator"
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="section-title text-center"
            >
              <span className="subtitle">Visit my portfolio</span>
              <h2 className="title">My Portfolio Projects</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
          {projects.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setOpenedProject(item);
              }}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <a href="javascript:void(0)">
                      <img src={item.image} alt="Personal Portfolio Images" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="javascript:void(0)">{item.title}</a>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 5 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                      <a
                        href="javascript:void(0)"
                        className="limited-text-four"
                        style={{ textAlign: "left" }}
                      >
                        {item.description}
                        {/* <i className="feather-arrow-up-right"></i> */}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PortfolioComponent;

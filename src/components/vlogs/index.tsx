import { useNavigate } from "react-router-dom";
import { blogs } from "../../jsons/blogs";

const VlogsComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="rn-blog-area rn-section-gap section-separator" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-once="true"
              className="section-title text-center"
            >
              <span className="subtitle">Visit my blogs</span>
              <h2 className="title">My Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
          {blogs.slice(0, 3).map((blog) => (
            <div
              data-aos="fade-up"
              key={blog.id}
              data-aos-duration="500"
              data-aos-delay="800"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30 cursoring"
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              <div className="rn-blog">
                <div className="inner">
                  <div className="thumbnail">
                    <img src={blog.image} alt="Personal Portfolio Images" />
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a>{blog.title}</a>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 5 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                      <a>
                        <div className="limited-text-four">
                          {blog.description}
                        </div>
                        {/* Read more */}
                        {/* <i className="feather-arrow-up-right"></i> */}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="experience-right"
          style={{ textAlign: "right", marginTop: "20px" }}
        >
          <div className="experience-footer">
            <a className="rn-btn" href="/blogs">
              <span>View All Blogs</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VlogsComponent;

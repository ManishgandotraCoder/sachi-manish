import { useNavigate } from "react-router-dom";
import { blogs } from "../jsons/blogs";
import ContactComponent from "../components/contact";
import Footer from "../components/footer";
import LogoComponent from "../components/logo";
import { useEffect, useState } from "react";
import ImageComponent from "../components/image";

const hrefFields = [{ name: "Contact", path: "#contact" }];
const navFields = [{ name: "Home", path: "/#" }];
const BlogsComponent = () => {
  const navigate = useNavigate();
  const [headerClass, setHeaderClass] = useState<string>("");
  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setHeaderClass(`header--fixed header--sticky`);
      } else {
        setHeaderClass(``);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleSidenav = () => {
    setIsSidenavOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        <main className="main-page-wrapper white-version" id="#">
          <ImageComponent />
          <header
            className={`white-version rn-header haeder-default black-logo-version ${headerClass}`}
          >
            <div
              className="white-version header-wrapper rn-popup-mobile-menu m--0 row align-items-center"
              style={{ background: "none" }}
            >
              <div className="col-lg-2 col-6">
                <div className="header-left">
                  <div className="logo">
                    <a href="/">
                      <LogoComponent />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-6">
                <div className="header-center">
                  <nav
                    id="sideNav"
                    className="mainmenu-nav navbar-example2 d-none d-xl-block"
                  >
                    <ul
                      className="primary-menu nav nav-pills"
                      style={{ boxShadow: "inherit" }}
                    >
                      {navFields.map((item) => (
                        <li className="nav-item" key={item.path}>
                          <a
                            style={{ cursor: "pointer" }}
                            className="nav-link smoth-animation "
                            onClick={() => {
                              navigate(item.path);
                              document.body.scrollTop = 0;
                              document.documentElement.scrollTop = 0;
                            }}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                      {hrefFields.map((item) => (
                        <li className="nav-item" key={item.path}>
                          <a
                            className="nav-link smoth-animation "
                            href={item.path}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="header-right">
                    <div
                      className="hamberger-menu d-block d-xl-none"
                      style={{ marginRight: "10px" }}
                    >
                      <i
                        id="menuBtn"
                        className="feather-menu humberger-menu"
                        onClick={toggleSidenav}
                      ></i>
                    </div>

                    <div className="close-menu d-block">
                      <span className="closeTrigger">
                        <i data-feather="x" onClick={toggleSidenav}></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className={` mobile-sidebar ${isSidenavOpen ? "active" : ""}`}>
            <LogoComponent removeIcon={true} toggleSidenav={toggleSidenav} />
            <ul>
              {navFields.map((item) => (
                <li className="nav-item" key={item.path}>
                  <a
                    className="nav-link smoth-animation "
                    onClick={() => {
                      navigate(item.path);
                      document.body.scrollTop = 0;
                      document.documentElement.scrollTop = 0;
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {hrefFields.map((item) => (
                <li className="nav-item" key={item.path}>
                  <a className="nav-link smoth-animation " href={item.path}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rn-blog-area rn-section-gap section-separator white-version"
            id="blog"
          >
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
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="800"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                  >
                    <div
                      className="rn-blog"
                      data-toggle="modal"
                      data-target="#exampleModalCenters"
                    >
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src={blog.image}
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href="javascript:void(0)">{blog.title}</a>
                            </div>
                          </div>
                          <h4 className="title">
                            <a
                              href="javascript:void(0)"
                              className="limited-text-four"
                            >
                              {blog.description}
                              <i className="feather-arrow-up-right"></i>
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
          <ContactComponent />
          <Footer />
        </main>
      </div>
    </>
  );
};
export default BlogsComponent;

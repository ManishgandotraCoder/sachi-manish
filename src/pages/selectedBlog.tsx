import LogoComponent from "../components/logo";
import { useEffect, useState } from "react";
import ContactComponent from "../components/contact";
import Footer from "../components/footer";
import { blogs } from "../jsons/blogs";
import { useNavigate, useParams } from "react-router-dom";
import ImageComponent from "../components/image";

const SelectedBlog = () => {
  const hrefFields = [{ name: "Contact", path: "#contact" }];
  const navFields = [
    { name: "Home", path: "/#" },
    { name: "Blog", path: "/blogs#" },
  ];

  const [headerClass, setHeaderClass] = useState<string>("");
  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const { id } = useParams();
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
    <main className="main-page-wrapper white-version" id="home">
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
                      <a className="nav-link smoth-animation " href={item.path}>
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
              <a className="nav-link smoth-animation " href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="rn-service-area rn-section-gap section-separator"
        id="blog"
      >
        <div className="white-version container">
          {id &&
            blogs
              .filter((item) => +item.id === +id)
              .map((blog) => (
                <div key={blog.id}>
                  <div className="experience-center">
                    {/* <span className="date">2015-Present</span> */}
                    <h4 className="experience-title" style={{ color: "gray" }}>
                      {blog.title}
                    </h4>

                    <span>{blog.description}</span>
                    <br />
                    <br />
                    <img
                      src={blog.image}
                      alt="Personal Portfolio"
                      className="notesImage"
                    />
                    <br />
                    <br />
                  </div>

                  {blog.detailedJson}
                </div>
              ))}
        </div>
      </div>

      <ContactComponent />
      <Footer />
    </main>
  );
};
export default SelectedBlog;
{
  /* <div dangerouslySetInnerHTML={{ __html: blog?.details }} /> */
}

import { useEffect, useState } from "react";
import AboutComponent from "../components/about";
import WhatIdoComponent from "../components/WhatIdo";
import ContactComponent from "../components/contact";
import Footer from "../components/footer";
import VlogsComponent from "../components/vlogs";
import ResumeComponent from "../components/resume";
import PortfolioComponent from "../components/portfolio";
import LogoComponent from "../components/logo";
import ImageComponent from "../components/image";
import { useTheme } from "./useTheme";

const navFields = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about" },
  { name: "What I do", path: "#whatIdo" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Resume", path: "#resume" },
  { name: "Blog", path: "#blog" },
  { name: "Contact", path: "#contact" },
];
function HomeComponent() {
  const [openedProject, setOpenedProject] = useState<any>({});
  const [headerClass, setHeaderClass] = useState<string>("");
  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);
  const { theme } = useTheme();

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
      <main className="main-page-wrapper white-version" id="#">
        <ImageComponent />
        {/* <ResponsiveNavbar /> */}
        <header
          className={`${theme} rn-header haeder-default black-logo-version ${headerClass}`}
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
                          className="nav-link smoth-animation "
                          href={`${item.path}`}
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
                  className="nav-link smoth-animation active cursoring"
                  href={`${item.path}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <AboutComponent />
        <WhatIdoComponent />
        <PortfolioComponent setOpenedProject={setOpenedProject} />
        <ResumeComponent />
        <VlogsComponent />

        <div
          className="modal fade"
          id="exampleModalCenters"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-news"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true"></span>
                </button>
              </div>

              <div className="modal-body">
                <div className="news-details">
                  <h2 className="title" style={{ padding: 0, margin: 0 }}>
                    {openedProject.title}
                  </h2>
                </div>
                <img
                  src={openedProject.image}
                  alt="news modal"
                  className="img-fluid modal-feat-img"
                />
                <div className="news-details">
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "20px",
                    }}
                  >
                    {openedProject.description}
                  </h2>
                  {openedProject?.roles?.map((item: string) => (
                    <li key={item} style={{ textAlign: "left" }}>
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactComponent />
      <Footer />
    </>
  );
}

export default HomeComponent;

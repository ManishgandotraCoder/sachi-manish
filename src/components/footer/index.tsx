import "../../newStyles.css";
import LogoComponent from "../logo";
const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="white-version rn-footer-area footer-style-2 rn-section-gapTop section-separator "
      >
        <div className="container pb--80 pb_sm--40 plr_sm--20 ">
          <div className="row">
            <div className="col-xl-3 col-12 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="logo-thumbnail">
                <a href="#">
                  <LogoComponent />
                  {/* <img
                    src="assets/images/logo/logo-dark.png"
                    alt="logo-image"
                  /> */}
                </a>
              </div>

              <div className="social-icons" style={{ marginTop: "10px" }}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/manish-gandotra-b53413b8/"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                  className="rn-btn"
                >
                  <i className="feather-linkedin"></i>
                  {/* <LinkedInIcon /> */}
                </a>
                <a
                  href="https://x.com/Manishgandotra1"
                  className="rn-btn"
                  aria-label="Call"
                  target="_blank"
                >
                  <i className="feather-twitter"></i>
                  {/* <CallIcon /> */}
                </a>
              </div>
            </div>
            <div className="col-sl-4 col-12 mt_sm--20 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="menu-wrapper">
                <div className="menu-title">
                  <h6>Primary Pages</h6>
                </div>
                <ul className="menu-footer">
                  <li>
                    <a className="footer_item_text" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sl-4 col-12 mt_sm--20 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="menu-wrapper">
                <div className="menu-title">
                  <h6>Follow me </h6>
                </div>
                <ul className="menu-footer">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/manish-gandotra-b53413b8/"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://x.com/Manishgandotra1">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://wa.me/+918800463103">
                      Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center ptb--40 section-separator">
          <p className="description">
            © 2024 Manishgandotra.com. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;

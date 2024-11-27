const ImageComponent = () => {
  return (
    <div className="main-bg">
      <div className="mid-bg">
        <div className="head-content">
          <div className="inner">
            <h1>
              <span
                style={{
                  color: "white",
                  fontSize: "150%",
                  fontWeight: "bold",
                  marginTop: "100px",
                }}
              >
                MANISH GANDOTRA
              </span>
            </h1>
            <br />
            <h3>
              <span
                style={{
                  color: "white",
                  fontSize: "75%",
                  fontWeight: "bold",
                }}
              >
                I'am a{" "}
                <span style={{ color: "#ff014f" }}>Professional Coder</span>
              </span>
            </h3>
            <br />
          </div>
          <a className="rn-btn" href="#contact" style={{ boxShadow: "none" }}>
            <span>CONTACT ME</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;

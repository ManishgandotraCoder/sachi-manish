import { whatIdo } from "../../jsons/whatIdo";
import "./styles.css";
const WhatIdoComponent = () => {
  return (
    <>
      <div
        className="rn-service-area rn-section-gap section-separator rn-service-area responsive-padding"
        id="whatIdo"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <h2 className="title">What I Do</h2>
              </div>
            </div>
          </div>
          <div style={{ justifyContent: "center", marginTop: "10px" }}>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="grid-container">
                {whatIdo?.map((item) => (
                  <div className="grid-item" key={item.title}>
                    <div className="rn-service">
                      <div className="inner">
                        <div
                          className="content"
                          style={{ padding: "30px", textAlign: "left" }}
                        >
                          <h4 className="title">{item.title}</h4>
                          <p className="description">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhatIdoComponent;

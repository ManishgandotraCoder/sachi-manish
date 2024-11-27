import { FC } from "react";
import "./styles.css";
type toggleSidenavType = {
  toggleSidenav?: () => void;
  removeIcon?: boolean;
};
const LogoComponent: FC<toggleSidenavType> = ({
  toggleSidenav,
  removeIcon,
}) => {
  return (
    <div style={{ display: "flex", padding: "10px" }}>
      <img
        src="/main/manish.png"
        alt="logo"
        style={{
          height: "60px",
          borderRadius: "50%",
          padding: "3px",
          border: "2px dashed #ff014f",
        }}
      />
      {/* <span className="logoname">Manish&nbsp;Gandotra</span> */}
      <a className="nav-link smoth-animation active logoname">
        Manish&nbsp;Gandotra
      </a>
      {removeIcon && (
        <div
          style={{
            height: "60px",
            borderRadius: "50%",
            fontSize: "40px",
            color: "grey",
          }}
          onClick={toggleSidenav}
        >
          &times;
        </div>
      )}
    </div>
  );
};
export default LogoComponent;

import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./newStyles.css";
import BlogsComponent from "./pages/blogs";
import HomeComponent from "./pages/home";
import SelectedBlog from "./pages/selectedBlog";
// import { useTheme } from "./pages/useTheme";

const DefaultComponent = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="white-version">
      <div className="backto-top">
        <div>
          <i
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
            className="feather-arrow-up"
          ></i>
        </div>
      </div>
      <div className="rn-right-demo">
        <button className="demo-button">
          <span className="text">
            <a target="_blank" className="color" href="tel:+918800463103">
              <i className="feather-phone"></i>
            </a>
            &nbsp;
            <a
              target="_blank"
              className="color"
              href="https://www.linkedin.com/in/manish-gandotra-b53413b8/"
            >
              <i className="feather-linkedin"></i>
            </a>
            &nbsp;
            <a
              target="_blank"
              className="color"
              href="https://x.com/Manishgandotra1"
            >
              <i className="feather-twitter"></i>
            </a>
            {/* &nbsp; */}
            {/* <a
              target="_blank"
              className="color"
              onClick={toggleTheme}
              // href="https://x.com/Manishgandotra1"
            >
              <i className="feather-twitter"></i>
            </a> */}
          </span>
        </button>
      </div>
    </div>
  );
};
const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeComponent /> },
    { path: "/blogs", element: <BlogsComponent /> },
    { path: "/blogs/:id", element: <SelectedBlog /> },
  ]);

  return routes;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <DefaultComponent />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

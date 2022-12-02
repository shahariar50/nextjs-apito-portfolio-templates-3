import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {" "}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="index.html">
            ShareBootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {" "}
                <a className="nav-link js-scroll-trigger" href="index.html">
                  Home
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link js-scroll-trigger" href="project.html">
                  Work
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link js-scroll-trigger" href="contact.html">
                  Contact
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer className="footer pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="copy"> &copy; 2019 Sharebootstrap.com </div>
            </div>
            <div className="col-md-9">
              <h3 className="footer-title">
                We collaborate with ambitious brands and people.
                <br /> let’s build something great together.
              </h3>
              <div className="row mt-5">
                <div className="col-md-4">
                  <h5>Start a conversation</h5>
                  <ul className="list-unstyled p-0">
                    <li className="#">
                      <a
                        href="mailto:hi@sharebootstrap.com"
                        target="_blank"
                        data-bypass=""
                        rel="noreferrer"
                      >
                        hi@
                      </a>
                      <br />{" "}
                    </li>
                    <li className="#">
                      <a
                        href="mailto:hi@sharebootstrap.com"
                        target="_blank"
                        data-bypass=""
                        rel="noreferrer"
                      >
                        dummy@
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>Portfolio sites</h4>
                  <ul className="list-unstyled p-0">
                    <li className="#">
                      {" "}
                      <a href="#" target="_blank">
                        sharebootstrap.com
                      </a>
                    </li>
                    <li className="#">
                      <a href="#" target="_blank">
                        codenpixel.com
                      </a>
                      <br />{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>Quick links</h4>
                  <ul className="list-unstyled p-0">
                    <li className="#">
                      <a href="#">contact</a>
                    </li>
                    <li className="#">
                      <a href="#">terms</a>
                    </li>
                    <li className="#">
                      <a href="#">faq</a>
                    </li>
                    <li className="#">
                      <a href="#">who we are</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

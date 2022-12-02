export default function Home() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          {" "}
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
      <header>
        <div className="container">
          <div className="row d-flex align-content-center">
            <div className="col-md-7">
              <div className="headline">
                <div className="headline-content">
                  <h1 className="headline-title display-3">
                    A digital agency for brands that want more.
                  </h1>
                  <p className="headline-subtitle">
                    We collaborate with ambitious people.Let’s build something
                    great.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="space-md">
        <div id="portfolio" className="container">
          <div id="portfolio-filters">
            <ul id="filters" className="p-0">
              <li>
                <a href="*" className="active">
                  All
                </a>
              </li>
              <li>
                <a href=".digital">Digital</a>
              </li>
              <li>
                <a href=".branding">Web Design</a>
              </li>
              <li>
                <a href=".campaigns">Marketing</a>
              </li>
            </ul>
          </div>
          <div
            className="grid"
            data-cols="3"
            data-margin="30"
            data-height="1"
            data-masonry='{ "columnWidth": 200, "itemSelector": ".entry" }'
          >
            <div className="entry work-entry branding">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1558212628-ad7f5fb28c5e.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Liber Finance</div>
                    <div className="work-entry-cat">Web</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry digital">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1558180702-95f1c3ae2ca3.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Aramark</div>
                    <div className="work-entry-cat">Marketing</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry campaigns">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1558118720-fa5cdebe6b3a.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Portfolio page</div>
                    <div className="work-entry-cat">web design</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry branding">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1558100984-01e6cd6fc9aa.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Sunday Breakfast</div>
                    <div className="work-entry-cat">Branding</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry campaigns h2">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1558082513-13668c3b7425.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Sunday Breakfast</div>
                    <div className="work-entry-cat">All</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry branding digital">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1557941760-987c3f403d5a.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Pine Street</div>
                    <div className="work-entry-cat">Web + Digital</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry digital">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1534073828943-f801091bb18c.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Mobipaid</div>
                    <div className="work-entry-cat">Branding</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry brading">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1484755560615-a4c64e778a6c.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Solo Solution</div>
                    <div className="work-entry-cat">Logo</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry digital campaigns">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1494253109108-2e30c049369b.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Panic web</div>
                    <div className="work-entry-cat">Branding Campaign</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry branding digital">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1436262513933-a0b06755c784.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Solocademy</div>
                    <div className="work-entry-cat">Web design + Branding</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry campaigns digital h2">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1494475673543-6a6a27143fc8.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">Soulart</div>
                    <div className="work-entry-cat">Marketing</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="entry work-entry campaigns digital branding w2">
              <a href="project.html">
                <div
                  className="entry-image imageBG"
                  data-img="img/photo-1501534664411-d04203736d05.jpg"
                ></div>
                <div className="work-entry-hover">
                  <div className="work-entry-content">
                    <div className="work-entry-title">DuleSavic</div>
                    <div className="work-entry-cat">Fudbaler</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

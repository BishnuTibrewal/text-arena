import PropTypes from "prop-types";
function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{ color: props.mode === "dark" ? "gray" : "palevioletred" }}
        >
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.aboutUs}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Framework: React
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Skills: HTML, CSS, JavaScript
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Support Us: Donate !
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div
            className="form-check form-switch"
            style={{ marginRight: "10px" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.handleModeChange}
            />
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string,
};

NavBar.defaultProps = {
  title: "Set Title Here",
  aboutUs: "Add About Here",
};

export default NavBar;

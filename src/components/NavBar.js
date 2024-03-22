import PropTypes from 'prop-types';
function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color:"palevioletred"}}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.aboutUs}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Framework: React
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Skills: HTML, CSS, JavaScript
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Support Us: Donate !
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" style={{color:"palevioletred", borderColor:"palevioletred"}}>
              Created By: BishTibrewal
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes={
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string
}

NavBar.defaultProps ={
  title: "Set Title Here",
  aboutUs: "Add About Here"
}

export default NavBar;

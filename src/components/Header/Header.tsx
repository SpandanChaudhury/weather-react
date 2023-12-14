const Header = () => {


  return (
    <nav
      className="navbar navbar-expand bg-body-tertiary mb-4 d-flex justify-content-between"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand align-center" href="#">
          Find The Weather of Your Desired Location
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
      
      </div>
    </nav>
  );
};

export default Header;

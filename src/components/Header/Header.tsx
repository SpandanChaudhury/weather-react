const Header = ({currTime} : {currTime: string}) => {
  let today = new Date();
  let date = today.getDate() + '-'+(today.getMonth()+1)+'-'+ today.getFullYear()
  // var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  console.log(date);

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">

            <h5 className = "nav-item text-info">
            { date }, { currTime }
            </h5>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

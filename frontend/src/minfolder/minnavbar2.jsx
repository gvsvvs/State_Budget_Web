function MinNavbar2() {
    return (
      <>
  <div className="bar">
    <div className="heading" >
      {/* <img src="/public/budget.jpg" alt="budget image" /> */}
      <img src="./stateimage.png" alt="state image" />
      <h1>Telangana State Budget</h1>
    </div>
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link  to="/" className="navbar-brand">TC</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link  to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link  to="/udev" className="nav-link">Developments</Link>
            </li>
            <li className="nav-item">
            <Link  to="/uachi" className="nav-link">Achievements</Link>
            </li>
            <li className="nav-item">
            <Link  to="/ugallery" className="nav-link">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  </div>
      </>
    );
  }

export default MinNavbar2;
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Responsive offcanvas navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-NavLink pe-3" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink pe-3" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink pe-3" to="help">Help</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-NavLink dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/about">Another action</NavLink></li>
                            <li>
                            <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex mt-3 mt-lg-0" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main> 
            <footer className="bg-light">
                <div className="py-5 container">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-1row justify-content-between py-4 my-4 border-top">
                    <p>© 2023 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                        <a className="link-body-emphasis" href="/">
                            <svg className="bi" width="24" height="24">
                            <use href="#twitter"></use>
                            </svg>
                        </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <svg className="bi" width="24" height="24">
                                <use href="#twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <svg className="bi" width="24" height="24">
                                <use href="#twitter"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
 
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (  
        <div className="fixed-top">
            <div className="bg-primary"> 
                <div className="container">
                    <div className="topbar d-lg-flex flex-wrap align-items-center justify-content-center justify-content-lg-start text-white py-2">
                    <p className="mb-1 mb-lg-0 me-auto">Reliable & Affordable Fiber Optic Service (FIOS)</p>
                    <div className="d-md-flex text-end">
                        <div className="d-flex pe-5 pb-1 pb-lg-0">
                        <i className="fa-solid fa-envelope-open-text fs-5 pe-2"></i>
                        <a className="text-white" href="contact.html">info@peerexnetworks.com</a>
                        </div>
                        <div className="d-flex">
                        <i className="fa-solid fa-headphones-simple fs-5 pe-2"></i>
                            <a className="text-white" href="contact.html"> 09639733733</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark shadow-lg">
                <div className="container d-flex flex-wrap justify-content-center align-items-center">
                    <div className="d-flex align-items-center me-md-auto text-dark text-decoration-none pb-2 pb-lg-0">
                    <div className="d-grid text-center">
                        <a className="pb-1" href="/"><img src={require('../images/logo.png')} alt="logo"/></a>
                        
                    </div>
                    </div>

                    <ul className="nav nav-pills text-end">
                        <li className="nav-item fw-semibold">
                            <NavLink to="/" className="nav-NavLink pe-3">Home</NavLink>
                        </li>
                        <li className="nav-item fw-semibold">
                            <a href="https://portal.iccbd.com/customer/login" rel="noopener" target="_blank" className="nav-NavLink pe-3">My Account</a>
                        </li>
                        <li className="nav-item fw-semibold">
                            <a href="https://PEEREXnetworks.speedtestcustom.com/" rel="noopener" target="_blank" className="nav-NavLink pe-3">Speed Test</a>
                        </li>
                        <li className="nav-item fw-semibold">
                            <NavLink className="nav-NavLink pe-3" aria-current="page" to="contact-us">Contact</NavLink>
                        </li>
                    <li className="nav-item fw-semibold">
                        <NavLink to="connectivity" className="btn btn-primary me-10 mb-10 mb-md-0">Connectivity form</NavLink>
                    </li>
                    <li className="nav-item fw-semibold">
                        <NavLink to="ticket" className="btn btn-outline-secondary">Create Ticket</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
 
export default NavBar;
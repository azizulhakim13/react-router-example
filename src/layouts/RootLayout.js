import { NavLink, Link, Outlet } from "react-router-dom";
import {FaFacebookF, FaGoogle, FaLinkedinIn, FaYoutube, FaArrowCircleRight } from 'react-icons/fa';

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
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
                            <NavLink href="https://PEEREXnetworks.speedtestcustom.com/" target="_blank" className="nav-NavLink pe-3">Speed Test</NavLink>
                        </li>
                        <li className="nav-item fw-semibold">
                            <NavLink className="nav-NavLink pe-3" aria-current="page" to="contact-us">Contact</NavLink>
                        </li>
                    <li className="nav-item fw-semibold"><a href="connectivity.html" className="btn btn-primary me-10 mb-10 mb-md-0">Connectivity form</a></li>
                    <li className="nav-item fw-semibold"><a href="ticket.html" className="btn btn-outline-secondary">Create Ticket</a></li>
                    </ul>
                </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="bg-light py-4 py-lg-60">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
                    <div className="col-xl-3">
                        <a href="index.html"><img className="pb-3" src={require('../images/logo.png')} alt="logo"/></a>
                        <p className="mb-0">Powered by PEEREX.<br/> Reliable & Affordable Fiber Optic Service (FIOS)</p>
                    </div>
                    <div className="col-xl-2 footer-widget-1 ps-lg-5">
                        <h4 className="mb-3 mb-lg-25 fs-5">Navigation</h4>
                        <ul className="list-unstyled">
                        <li>
                            <FaArrowCircleRight className="me-2" /><a href="index.html">Home</a>
                        </li>
                        <li >
                            <FaArrowCircleRight className="me-2" /><Link href="https://portal.peerexnetworks.com/customer/login" target="_blank" >My Account</Link>
                        </li>
                        <li >
                            <FaArrowCircleRight className="me-2" /><Link href="http://PEEREXnetworks.speedtestcustom.com/" target="_blank">Speed Test</Link>
                        </li>
                        <li >
                            <FaArrowCircleRight className="me-2" /><a href="connectivity.html">Connectivity Form</a>
                        </li>
                        <li >
                            <FaArrowCircleRight className="me-2" /><a href="ticket.html">Create Ticket</a>
                        </li>
                        <li >
                            <FaArrowCircleRight className="me-2" /><a href="contact.html">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 footer-widget-2 ps-lg-5">
                        <h4 className="mb-3 mb-lg-25 fs-5">Call Us 24/7</h4>
                        <ul className="list-unstyled">
                        <li>
                            09639733733,
                        </li>
                        <li >
                            +8801312733761,
                        </li>
                        <li >
                            +8801312733760
                        </li>
                        </ul>
                        <h4 className="fs-5">Email Us</h4>
                        <ul className="list-unstyled">
                        <li>
                            info@peerexnetworks.com
                        </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 footer-widget-3 ps-lg-5">
                        <h4 className="mb-3 mb-lg-25 fs-5">Contact Us</h4>
                        <ul className="list-unstyled">
                        <li>
                            12/D, Lane: 6, Plot: I/15-18, Pallabi, Mirpur, Dhaka-1216.

                        </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 footer-widget-4">
                        <h4 className="mb-3 mb-lg-25 fs-5">Find Us</h4>
                        <ul className="list-unstyled">
                        <li className="social-icons border-0 pt-2">
                            <Link href="https://www.facebook.com/iccbroadband/" aria-label="facebook" target="_blank">
                                <FaFacebookF />
                            </Link>
                            <Link className="mx-1" aria-label="google" href="https://icc.com.bd/" target="_blank">
                                <FaGoogle />
                            </Link>
                            <Link className="me-1" href="https://www.linkedin.com/company/icc-communication-ltd/mycompany/" target="_blank" aria-label="linkedin">
                                < FaLinkedinIn />    
                            </Link>
                            <Link href="https://www.youtube.com/@ICCCommunicationLtd" target="_blank" aria-label="youtube">
                                <FaYoutube />    
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
 
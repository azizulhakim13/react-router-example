import { Link, Outlet } from "react-router-dom";
import {FaFacebookF, FaGoogle, FaLinkedinIn, FaYoutube, FaArrowCircleRight } from 'react-icons/fa';
import NavBar from "../components/NavBar";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
            
                <NavBar />

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
            <div className="copyright-bar bg-primary py-2">
                <div className="container text-white">
                    <div className="d-flex justify-content-center">
                    <p className="mb-0 pb-md-0">© <span className="fw-semibold">
                        <a className="text-white" href="https://www.icc.com.bd/" target="_blank">PEEREX.</a></span>  All Rights Reserved by  PEEREX.</p>
                    </div>
                </div>
    </div>
        </div>
    )
}
 
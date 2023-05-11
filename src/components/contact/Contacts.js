import {FaMapMarkerAlt, FaMailBulk, FaPhoneAlt} from 'react-icons/fa';

const Contacts = () => {
    return (  
        <section className="contact-us">
            <div className="container">
                <div className="row py-4 py-lg-60 gy-5">
                <div className="col-xl-6 pe-xl-4">
                    <div className="row gy-4">
                    <div className="col-md-12">
                        <div className="card card-contact shadow">
                        <div className="card-body text-center py-30">
                            <div className="icon-circle-wrap rounded-circle mx-auto">
                                <FaMapMarkerAlt className="fa-solid"  />
                                
                            </div>
                            <h3 className="card-title fw-semibold fs-4 pt-20 mb-10">Our Location</h3>
                            <p className="card-text mb-0">12/D, Road: 6, Plot: I/15-18,</p>
                            <p className="card-text">Pallabi, Mirpur, Dhaka-1216.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-contact shadow">
                        <div className="card-body text-center py-30">
                            <div className="icon-circle-wrap rounded-circle fs-2 mx-auto">
                                <i className="fa-solid fa-envelope"></i>
                                <FaMailBulk className="fa-solid"  />
                            </div>
                            <h3 className="card-title fw-semibold fs-4 pt-20 mb-10">Email Us</h3>
                            <p className="card-text mb-0">info@peerexnetworks.com</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-contact shadow">
                        <div className="card-body text-center py-30">
                            <div className="icon-circle-wrap rounded-circle fs-2 mx-auto">
                            <FaPhoneAlt className="fa-solid"  />
                            </div>
                            <h3 className="card-title fw-semibold fs-4 pt-20 mb-10">Call Us</h3>
                            <p className="card-text mb-0"> 09639733733</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-xl-6 ps-xl-4">
                    <div className="row shadow mt-0 p-4 gy-4">
                    <div className="col-lg-6">
                        <form action="#">
                            <div>
                                <input type="text" className="form-control border" placeholder="Your name*" required/>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <form action="#">
                        <div>
                            <input type="email" className="form-control border" placeholder="Your E-mail*" required/>
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <form action="#">
                        <div>
                            <input type="tel" className="form-control border" placeholder="phone*" required/>
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <form action="#">
                        <div>
                            <input type="text" className="form-control border" placeholder="Subject*" required/>
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-12">
                        <form action="#">
                        <textarea className="form-control text-area border" rows="10" placeholder="Message"></textarea>
                        </form>
                    </div>
                    <div className=" text-center mt-3">
                        <a href="/" className="btn btn-primary">Send Message</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
 
export default Contacts;
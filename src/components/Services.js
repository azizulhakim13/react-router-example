const Services = () => {
    return (  
        <div className="services bg-light pt-60 pb-60">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 gy-4">
                <div className="col-lg-4">
                    <div className="service-column text-center h-100 p-30 shadow">
                    <img src={require('../images/service-icon1.png')} alt="service"/>
                    <p className="fw-bold fs-5 mb-20">Installing and delivering quickly</p>
                    <p className="lh-lg">We guarantee quick delivery of a broadband connection through fiber optic cable at your convenience.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="service-column text-center p-30 shadow">
                    <img src={require('../images/service-icon2.png')} alt="services"/>
                    <p className="fw-bold fs-5 mb-20">
                        Limitless Download and Upload</p>
                    <p className="lh-lg">Our shared connections feel like dedicated ones because of unlimited upload and download at accurate speed 24/7.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="service-column text-center h-100 p-30 shadow">
                    <img src={require('../images/service-icon3.png')} alt="services"/>
                    <p className="fw-bold fs-5 mb-20">24/7 Customer Support</p>
                    <p className="lh-lg">To guarantee you receive the quality for which you are paying, devoted engineers are available to you around-the-clock.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Services;
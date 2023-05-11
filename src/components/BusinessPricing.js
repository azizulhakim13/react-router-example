import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import { SwiperNavButtons } from "./SwiperNavButtons";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import 'swiper/css/scrollbar';

const BusinessPricing = () => {
    return (  
        <div className="pricing-business pb-3">
            <div className="section-title text-center">
                <h2 className="fw-semibold position-relative pb-3 mb-0 pt-4 pt-lg-5">Business Pricing Plan</h2>
                <p className="pt-2 mb-0">Reliable & Affordable Fiber Optic Service (FIOS)</p>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                grabCursor={true}
                navigation={true}
                breakpoints={{
                    280: { slidesPerView: 1, spaceBetween: 15 },
                    480: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1e3: { slidesPerView: 3, spaceBetween: 30 },
                    1200: { slidesPerView: 4, spaceBetween: 20 },
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="container text-center pt-md-100 pb-md-60 pb-5">
                <SwiperSlide>
                    <div className="card business-plan-card shadow-sm">
                        <div className="card-header bg-secondary text-center text-white fs-3 py-3">Super Ultra</div>
                        <div className="card-body pb-0">
                        <div>
                            <p className="card-title my-3 text-center fs-2 fw-semibold"><sup className="fs-4">৳</sup>9000<sub className="text-muted fs-5 fw-normal fst-italic">/ month</sub></p>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">BDIX 100 Mbps</li>
                            <li className="list-group-item">FREE 2 IP Phone Number</li>
                            <li className="list-group-item">FREE 100 Tk Talktime (Once)</li>
                            <li className="list-group-item">FREE Fiber Optic Modem</li>
                            <li className="list-group-item">Installation Charge 2000 Tk</li>
                            <li className="list-group-item">+ 5% VAT (Prepaid)</li>
                        </ul>
                        </div>
                        <div className="card-footer text-center py-3">
                        <a href="connectivity.html" className="btn btn-secondary">Get Started</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card business-plan-card shadow-sm">
                        <div className="card-header bg-secondary text-center text-white fs-3 py-3">Super Ultra</div>
                        <div className="card-body pb-0">
                        <div>
                            <p className="card-title my-3 text-center fs-2 fw-semibold"><sup className="fs-4">৳</sup>9000<sub className="text-muted fs-5 fw-normal fst-italic">/ month</sub></p>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">BDIX 100 Mbps</li>
                            <li className="list-group-item">FREE 2 IP Phone Number</li>
                            <li className="list-group-item">FREE 100 Tk Talktime (Once)</li>
                            <li className="list-group-item">FREE Fiber Optic Modem</li>
                            <li className="list-group-item">Installation Charge 2000 Tk</li>
                            <li className="list-group-item">+ 5% VAT (Prepaid)</li>
                        </ul>
                        </div>
                        <div className="card-footer text-center py-3">
                        <a href="connectivity.html" className="btn btn-secondary">Get Started</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card business-plan-card shadow-sm">
                        <div className="card-header bg-secondary text-center text-white fs-3 py-3">Super Ultra</div>
                        <div className="card-body pb-0">
                        <div>
                            <p className="card-title my-3 text-center fs-2 fw-semibold"><sup className="fs-4">৳</sup>9000<sub className="text-muted fs-5 fw-normal fst-italic">/ month</sub></p>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">BDIX 100 Mbps</li>
                            <li className="list-group-item">FREE 2 IP Phone Number</li>
                            <li className="list-group-item">FREE 100 Tk Talktime (Once)</li>
                            <li className="list-group-item">FREE Fiber Optic Modem</li>
                            <li className="list-group-item">Installation Charge 2000 Tk</li>
                            <li className="list-group-item">+ 5% VAT (Prepaid)</li>
                        </ul>
                        </div>
                        <div className="card-footer text-center py-3">
                        <a href="connectivity.html" className="btn btn-secondary">Get Started</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card business-plan-card shadow-sm">
                        <div className="card-header bg-secondary text-center text-white fs-3 py-3">Super Ultra</div>
                        <div className="card-body pb-0">
                        <div>
                            <p className="card-title my-3 text-center fs-2 fw-semibold"><sup className="fs-4">৳</sup>9000<sub className="text-muted fs-5 fw-normal fst-italic">/ month</sub></p>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">BDIX 100 Mbps</li>
                            <li className="list-group-item">FREE 2 IP Phone Number</li>
                            <li className="list-group-item">FREE 100 Tk Talktime (Once)</li>
                            <li className="list-group-item">FREE Fiber Optic Modem</li>
                            <li className="list-group-item">Installation Charge 2000 Tk</li>
                            <li className="list-group-item">+ 5% VAT (Prepaid)</li>
                        </ul>
                        </div>
                        <div className="card-footer text-center py-3">
                        <a href="connectivity.html" className="btn btn-secondary">Get Started</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card business-plan-card shadow-sm">
                        <div className="card-header bg-secondary text-center text-white fs-3 py-3">Super Ultra</div>
                        <div className="card-body pb-0">
                        <div>
                            <p className="card-title my-3 text-center fs-2 fw-semibold"><sup className="fs-4">৳</sup>9000<sub className="text-muted fs-5 fw-normal fst-italic">/ month</sub></p>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">BDIX 100 Mbps</li>
                            <li className="list-group-item">FREE 2 IP Phone Number</li>
                            <li className="list-group-item">FREE 100 Tk Talktime (Once)</li>
                            <li className="list-group-item">FREE Fiber Optic Modem</li>
                            <li className="list-group-item">Installation Charge 2000 Tk</li>
                            <li className="list-group-item">+ 5% VAT (Prepaid)</li>
                        </ul>
                        </div>
                        <div className="card-footer text-center py-3">
                        <a href="connectivity.html" className="btn btn-secondary">Get Started</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card business-plan-card shadow-sm">
                        <div className="card-header bg-secondary text-center text-white fs-3 py-3">Super Ultra</div>
                        <div className="card-body pb-0">
                        <div>
                            <p className="card-title my-3 text-center fs-2 fw-semibold"><sup className="fs-4">৳</sup>9000<sub className="text-muted fs-5 fw-normal fst-italic">/ month</sub></p>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">BDIX 100 Mbps</li>
                            <li className="list-group-item">FREE 2 IP Phone Number</li>
                            <li className="list-group-item">FREE 100 Tk Talktime (Once)</li>
                            <li className="list-group-item">FREE Fiber Optic Modem</li>
                            <li className="list-group-item">Installation Charge 2000 Tk</li>
                            <li className="list-group-item">+ 5% VAT (Prepaid)</li>
                        </ul>
                        </div>
                        <div className="card-footer text-center py-3">
                        <a href="connectivity.html" className="btn btn-secondary">Get Started</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card business-plan-card shadow-sm">
                        <div className="card-header bg-secondary text-center text-white fs-3 py-3">Super Ultra</div>
                        <div className="card-body pb-0">
                        <div>
                            <p className="card-title my-3 text-center fs-2 fw-semibold"><sup className="fs-4">৳</sup>9000<sub className="text-muted fs-5 fw-normal fst-italic">/ month</sub></p>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item"></li>
                            <li className="list-group-item">BDIX 100 Mbps</li>
                            <li className="list-group-item">FREE 2 IP Phone Number</li>
                            <li className="list-group-item">FREE 100 Tk Talktime (Once)</li>
                            <li className="list-group-item">FREE Fiber Optic Modem</li>
                            <li className="list-group-item">Installation Charge 2000 Tk</li>
                            <li className="list-group-item">+ 5% VAT (Prepaid)</li>
                        </ul>
                        </div>
                        <div className="card-footer text-center py-3">
                        <a href="connectivity.html" className="btn btn-secondary">Get Started</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperNavButtons />
            </Swiper>
        </div>
    );
}
 
export default BusinessPricing;
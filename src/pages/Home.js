import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import { SwiperNavButtons } from "./SwiperNavButtons";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
    return ( 
        <div className="home">
            <div className="">
                <div className="px-4 py-5 text-center">
                    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                    <div className="col-lg-6 mx-auto"> 
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-dark btn-lg px-4 gap-3">Primary button</button>
                        <button type="button" className="btn btn-dark btn-lg px-4">Secondary</button>
                    </div>
                    </div>
                </div>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                grabCursor={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="container py-100 text-center" >
                <SwiperSlide className="bg-light py-5 border">Slide 1</SwiperSlide>
                <SwiperSlide className="bg-light py-5 border">Slide 2</SwiperSlide>
                <SwiperSlide className="bg-light py-5 border">Slide 3</SwiperSlide>
                <SwiperSlide className="bg-light py-5 border">Slide 4</SwiperSlide>
                <SwiperSlide className="bg-light py-5 border">Slide 5</SwiperSlide>
                <SwiperSlide className="bg-light py-5 border">Slide 6</SwiperSlide>
                <SwiperSlide className="bg-light py-5 border">Slide 7</SwiperSlide>
                <SwiperNavButtons />
            </Swiper>
        </div>
    );
}

export default Home;

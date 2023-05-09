
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns d-none d-md-block position-absolute top-0 end-0 mt-5">
      <button className='btn btn-outline-primary me-2' onClick={() => swiper.slidePrev()}>Prev</button>
      <button className='btn btn-outline-secondary' onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
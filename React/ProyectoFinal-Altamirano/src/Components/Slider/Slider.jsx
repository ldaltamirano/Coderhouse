// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Slider.css";
import Banner1 from "../../assets/banners/banner1.jpg"
import Banner2 from "../../assets/banners/banner2.jpg"
import Banner3 from "../../assets/banners/banner3.jpg"

export default function Slider() {
    return (
        <div className="slider">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Banner1} alt="banner" className='img-fluid ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Banner2} alt="banner" className='img-fluid ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Banner3} alt="banner" className='img-fluid ' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
"use client"
import { useRef } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function beranda() {
    const list = useRef(null);
    const itemWidth = 150
    const padding = 10

    const onclickLeft = () => {
        list.scrollLeft -= (itemWidth + padding)
    }
    const onClickRight = () => {
        list.scrollLeft += (itemWidth + padding)
    }

    return (
        <div className="container">
            <div className="relative">
                <img src="img/bg.jpeg" alt="" />
                <div className="absolute top-0 grid grid-cols-12 px-8 pb-8 bg-blue-900 h-24 pt-1">
                    <div className="col-span-1"></div>
                    <div className="col-span-3">
                        <img src="img/Logo-Web-Putih-980x204.png" className="" alt="" />
                        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                            <image href="Logo-Web-Putih-980x204.png" />
                        </svg>
                    </div>

                    <div className="col-span-2"></div>
                    <div className="col-span-6">
                        <div className="inline-block"></div>
                        <div className="grid grid-cols-12 text-center text-white">
                            <div className="col-span-2 inline-block align-middle">
                                Publication
                            </div>
                            <div className="col-span-2">
                                Researcher
                            </div>
                            <div className="col-span-2">
                                Partnership
                            </div>
                            <div className="col-span-3">
                                Our Research
                            </div>
                            <div className="col-span-2">
                                Contact us
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <h1 className="text-center">Feature Search</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                pagination={true}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <div className="bg-blue-800">

            </div>
        </div>
    )
}
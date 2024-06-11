"use client"
import { useRef } from "react"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function beranda() {
    return (
        <div className="container">
            <div className="relative">
                <img src="img/bg.jpeg" alt="" />
                <div className="absolute inset-0 flex flex-col items-end justify-center px-10">
                    <h1 className="text-9xl text-white">CSAC</h1>
                    <p className="text-xl text-white text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.</p>
                    <button>About us</button>
                </div>
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
            <div className="bg-white">
                <div className="px-10 py-10">
                    <div className="border-b-4">
                        <h1 className="text-center text-4xl text-[#1e3a8a] ">Feature Research</h1>
                    </div>
                </div>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide>
                        <div className="px-10">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-gray-600 flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-72" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-md text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="px-10">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-black flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-72" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-md text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="px-10">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-black flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-72" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-md text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="px-10">
                            <a class="p-2 max-w-xs border shadow-md border-2 border-white bg-white rounded-2xl hover:border-black flex flex-col items-center"
                                href="#">
                                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border w-72" />
                                <div class="mt-4">
                                    <h4 class="font-bold text-lg">Exercises</h4>
                                    <p class="mt-2 text-md text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                                    </p>
                                    <div class="mt-5">
                                        <p className="text-center text-sm text-gray-600">Read more</p>
                                        {/* <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="">
                <div className="mt-10 grid grid-cols-12">
                    <div className="col-span-9">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1"></div>
                            <div className="col-span-10 border-b-4 border-[#e4f47c]">
                                <h1 className="text-left font-bold text-lg">Our activity</h1>
                            </div>
                        </div>
                        <div className="pt-5 grid grid-cols-12">
                            <div className="col-span-1"></div>
                            <div className="col-span-10 border-b-2 flex gap-4 items-center">
                                <div className="">
                                    <img className="" loading="lazy" src="https://via.placeholder.com/150" />
                                </div>
                                <div className="flex flex-col gap-2 py-2">
                                    <div className="flex">
                                        <h1 className="text-xl font-bold">Judul</h1>
                                        <span className="text-sm text-gray-500 ml-auto">Tanggal</span>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, deleniti at, nisi soluta, quidem recusandae debitis quae laborum cupiditate suscipit pariatur id illum et consequatur fuga. Omnis tempora dignissimos aliquam.</p>
                                    <span className="text-xs text-gray-500">Diposting oleh:  </span>
                                </div>

                                <div className="">
                                    Readmoree
                                </div>
                            </div>
                        </div>
                        <div className="pt-5 grid grid-cols-12">
                            <div className="col-span-1"></div>
                            <div className="col-span-10 border-b-2 flex gap-4 items-center">
                                <div className="">
                                    <img className="" loading="lazy" src="https://via.placeholder.com/150" />
                                </div>
                                <div className="flex flex-col gap-2 py-2">
                                    <div className="flex">
                                        <h1 className="text-xl font-bold">Judul</h1>
                                        <span className="text-sm text-gray-500 ml-auto">Tanggal</span>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, deleniti at, nisi soluta, quidem recusandae debitis quae laborum cupiditate suscipit pariatur id illum et consequatur fuga. Omnis tempora dignissimos aliquam.</p>
                                    <span className="text-xs text-gray-500">Diposting oleh:  </span>
                                </div>

                                <div className="">
                                    Readmoree
                                </div>
                            </div>
                        </div>
                        <div className="pt-5 grid grid-cols-12">
                            <div className="col-span-1"></div>
                            <div className="col-span-10 border-b-2 flex gap-4 items-center">
                                <div className="">
                                    <img className="" loading="lazy" src="https://via.placeholder.com/150" />
                                </div>
                                <div className="flex flex-col gap-2 py-2">
                                    <div className="flex">
                                        <h1 className="text-xl font-bold">Judul</h1>
                                        <span className="text-sm text-gray-500 ml-auto">Tanggal</span>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, deleniti at, nisi soluta, quidem recusandae debitis quae laborum cupiditate suscipit pariatur id illum et consequatur fuga. Omnis tempora dignissimos aliquam.</p>
                                    <span className="text-xs text-gray-500">Diposting oleh:  </span>
                                </div>

                                <div className="">
                                    Readmoree
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-flow-row auto-rows-max">
                            <div className="border text-center rounded">
                                <h1 className="font-bold text-md border-b-2 my-3 mx-3 pb-2">Member area</h1>
                                <div className="mx-4 max-w-xs">
                                    <input
                                        class="w-full px-4 py-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input
                                        class="w-full px-4 py-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    <button
                                        class="mt-5 tracking-wide font-semibold bg-[#1e3a8a] text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mb-4">
                                        {/* <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg> */}
                                        <span class="ml-3">
                                            Sign Up
                                        </span>
                                    </button>
                                </div>

                            </div>

                            <div className="mt-10 border text-center">
                                <h1>Agenda</h1>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
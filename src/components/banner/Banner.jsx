import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='mb-4 md:mb-8 lg:mb-12'>
            <div className='relative'>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                >
                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/VDKzNK6/2147657372.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[1000px] bg-cover bg-bottom relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/8gkkbpB/2147864066.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[1000px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/NV8RxKZ/2148448033.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[1000px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>

                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/VQGWcbv/2149396684.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[1000px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/K0vscd5/24650.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[1000px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
                <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-3xl xl:text-6xl text-center md:text-left lg:text-5xl inline-block w-2/3 2xl:w-1/3 left-[18%] md:left-16 text absolute top-16 md:top-1/3 lg:top-[30%] 2xl:top-[33%] md:tracking-wide space z-10'>Welcome to <br />
                    <span className='text-red-400 text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl'> Book Realm</span>
                    <br />
                    A Place where you can
                    <br />
                    <span style={{ color: 'white', fontWeight: 'bold', margin: '5px 0' }}>
                        <Typewriter
                            words={['Read a Book', 'Borrow a Book', 'Study in a Quiet', 'Get Latest Books']}
                            loop={false}
                            cursor
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h2>
            </div>


        </div>

    );
};

export default Banner;
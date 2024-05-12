import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='mb-4 md:mb-8 lg:mb-12'>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://i.ibb.co/wh9Q2gS/made-clear-concrete-library-features-lightcolored-log-bookshelves-stepped-seating.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Welcome to your happy place. Discover Unique Paper Crafts & Glass Art Creations</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://i.ibb.co/7CpCxVV/girl-sitting-table-with-notebooks-writing.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-bottom relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Unveil the Magic of Paper Crafts & Glass Artistry through us!</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://i.ibb.co/d2BtrVj/teenage-students-bookshelf.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>A Best Place where you can Buy and Sell your Creative Products</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://i.ibb.co/jbPZPR0/pretty-young-woman-posing-library.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Shop Exquisite Paper Crafts & Glass Art Designs</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://i.ibb.co/4Fx9fqt/young-student-learning-library.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Find Your Inspiration in Paper Crafts & Glass Artistry</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    );
};

export default Banner;
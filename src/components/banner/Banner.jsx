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
                    <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/ready-back-school_1134-12.jpg?t=st=1715453706~exp=1715457306~hmac=7fa284a4fe5b6d106498fc74785bce744932e65449c1107cf5b0d8764108755f&w=1380")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-bottom relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Welcome to your happy place. Discover Unique Paper Crafts & Glass Art Creations</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/rewriting-text_1098-15227.jpg?t=st=1715453855~exp=1715457455~hmac=98e2b86b7f9add3492c1d3a4f66698daa1f91d2fc16c0d4f9b78ac2045d0d971&w=996")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Unveil the Magic of Paper Crafts & Glass Artistry through us!</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/pretty-young-woman-posing-library_23-2148727834.jpg?t=st=1715454041~exp=1715457641~hmac=016bc213718b6856c433919df5d19fe96d6d397902aee330826431d52134f78b&w=996")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>A Best Place where you can Buy and Sell your Creative Products</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/women-carrying-backpack-searching-books-library_1150-24649.jpg?t=st=1715454124~exp=1715457724~hmac=aa4fd051ed7b7f5501f20a70e3944b9cec8a1544a0f81a3858e521317c8381fb&w=1380")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Shop Exquisite Paper Crafts & Glass Art Designs</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?t=st=1715454283~exp=1715457883~hmac=7330f4369a7c674ba7c777771c6ebbce619197ce2f67eea02d3e25057bf9c6ff&w=1380")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px] bg-cover bg-center relative'>
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
import bg from '../../../public/bg.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
    return (
        <div className='relative'>
            <div >
                <img data-aos="fade-up"
                    data-aos-duration="4000" src={bg} alt="" className='h-[450px] w-full object-cover object-top' />
            </div>
            <div data-aos="fade-up"
                data-aos-duration="1000" className='absolute w-full flex items-center flex-wrap justify-around md:flex-nowrap bottom-0 gap-2 md:bottom-1/4 px-2 md:px-8 lg:px-12'>
                <div className='flex flex-col gap-4 items-center'>
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/06/google-is-a-librarian_-introducing-non-specialists-to-seo-60dc2b212a908-1280x720.png" alt="" className='h-32 w-32 lg:h-44 lg:w-44 object-cover object-top rounded-full' />
                    <div className='flex flex-col items-center font-bold text-white text-center'>
                        <h2 className='text-lg md:text-2xl xl:text-3xl'>Mr Alexander Adward</h2>
                        <h2>Librarian</h2>
                    </div>
                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCA8u46xeND0ysc7c4vGgXrUd-mkvT3o-p5Zw9kD7WEA&s" alt="" className='h-32 w-32 lg:h-44 lg:w-44 object-cover object-top rounded-full' />
                    <div className='flex flex-col items-center font-bold text-white text-center'>
                        <h2 className='text-lg md:text-2xl xl:text-3xl'>Mr Alexander Adward</h2>
                        <h2>Cataloger</h2>
                    </div>
                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <img src="https://i.insider.com/61f2e5152fd30f0018aee630?width=1136&format=jpeg" alt="" className='h-32 w-32 lg:h-44 lg:w-44 object-cover object-top rounded-full' />
                    <div className='flex flex-col items-center font-bold text-white text-center'>
                        <h2 className='text-lg md:text-2xl xl:text-3xl'>Mr Alexander Adward</h2>
                        <h2>Library Assistant</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
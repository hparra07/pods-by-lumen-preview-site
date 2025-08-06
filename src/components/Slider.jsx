import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gridImage from '../assets/images/white-grid.svg';
import person1 from '../assets/images/best-pic.png';
import person2 from '../assets/images/best-pic-2.png';
import person3 from '../assets/images/best-pic-3.png';
import person4 from '../assets/images/best-pic-4.png';


export default function Slider() {
    const people = [
        { img: person1, subs: '1M' },
        { img: person2, subs: '1M' },
        { img: person3, subs: '1.5M' },
        { img: person4, subs: '1M' },
        { img: person1, subs: '1M' },
        { img: person2, subs: '1M' },
        { img: person3, subs: '1.5M' },
        { img: person4, subs: '1M' }
    ];

    return (
        <section className="relative min-h-[800px] from-[#1022FF] bg-gradient-to-b to-transparent text-white overflow-hidden pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[60px] md:pb-[140px] lg:pb-[200px]">
        {/* Grid overlay */}
            <img
                src={gridImage}
                alt="Grid Background"
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
            />

        {/* Contenido */}
        <div className="relative z-10">
            <h2 className="text-[32px] sm:text-[35px] lg:text-[45px] font-medium text-center leading-none">
            We’ve worked with <span className="font-extrabold block md:inline">The Best</span>
            </h2>

            {/* Slider */}
            <div className="mt-[60px]">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={80}
                    loop={true}
                    speed={5000} // cuanto mayor, más lento y más fluido
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 0, // sin pausa entre slides
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-custom-pagination',
                        type: 'progressbar',
                    }}
                    /* breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }} */
                >
                    {people.map((person, index) => (
                        <SwiperSlide key={index} className='min-w-[300px] !w-[80%] md:!w-[50%] lg:!w-[21%] flex-shrink-0'>
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={person.img}
                                    alt={`Person ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 left-0 text-[25px] sm:text-[35px] lg:text-[45px] italic text-white leading-none bg-[#1022FF] px-5 py-6">
                                    {person.subs} <span className='block'>subs</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Barra de progreso abajo */}
                <div className="swiper-custom-pagination mt-20 h-1 bg-white overflow-hidden">
                    <div className="swiper-pagination-progressbar-fill bg-[#1022FF] absolute top-0 left-0 h-full w-0 transition-all duration-300"></div>
                </div>
            </div>
        </div>
        </section>
    );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CountUp from 'react-countup';

import { useRef, useState, useEffect } from 'react';

import team from '../assets/images/team--pic-wrapper.png';
import bigGrid from '../assets/images/big-white-grid.svg';

import jesseIntw from '../assets/images/content--thumbnail-1.png';
import mrBeast from '../assets/images/content--thumbnail.png';
import dannyDuncan from '../assets/images/content--thumbnail-2.png';
import jayPark from '../assets/images/content--thumbnail-3.png'; 

import short1 from '../assets/video/x0BBGON6_0.mp4';
import short2 from '../assets/video/-3MLtDK95YM.mp4';
import short3 from '../assets/video/oEyVDVDQfaY.mp4';
import short4 from '../assets/video/GpdZozkwcPg.mp4';
import short5 from '../assets/video/FEnFuoVmGi.mp4';
import short6 from '../assets/video/WNEdTRXrmR0.mp4';
import short7 from '../assets/video/x0ZqbnQ_7mg.mp4';

const shortVideos = [
    { video: short1, views: '49M', id: '_x0BBGON6_0', title: 'KSI vs Cristiano Ronaldo: Asking Hollywood Tourists Who’s More Popular?' },
    { video: short2, views: '4.9M', id: '-3MLtDK95YM', title: 'I Ordered Every Appetizer At Chili’s' },
    { video: short3, views: '4.6M', id: 'oEyVDVDQfaY', title: 'Why Dude Perfect Rejected Budweiser' },
    { video: short4, views: '5.5M', id: 'GpdZozkwcPg', title: 'Is This The Best Fried Chicken In The World?' },
    { video: short5, views: '62M', id: 'FEnFuoVmGi', title: '*sips third coffee of the day* ☕️' },
    { video: short6, views: '3M', id: 'WNEdTRXrmR0', title: 'Meet MrBeast’s Editor: Mack' },
    { video: short7, views: '15M', id: 'x0ZqbnQ_7mg', title: 'wait a damn minuteeeeee.....' },
];

const videos = [
    {
        id: 'HQEBbmROj2o',
        title: 'Jon Youshaei 1',
        img: mrBeast, 
        views: '2M'
    },
    {
        id: 'TndWQw05wsA',
        title: 'Jon Youshaei 2',
        img: dannyDuncan, 
        views: '3.5M'
    },
    {
        id: '29HuN4C9FsQ',
        title: 'DIVE Studios 1',
        img: jayPark, 
        views: '1.9M'
    },
    {
        id: '3gyKCeszjaI',
        title: 'DIVE Studios 2',
        img: jesseIntw, 
        views: '720K'
    },
];



export default function BigSection() {
    
    const swiperRef = useRef(null);
    const containerRef = useRef(null);
    const shortsContainerRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [videoType, setVideoType] = useState(null); // 'long' o 'short'
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    useEffect(() => {
        const div = document.querySelector('.views-overlay');
        if (div) {
            div.style.visibility = 'visible';
            div.style.opacity = '1';
            div.offsetHeight; // Esto fuerza el reflujo del DOM
        }
    }, []);

    return (
        <section className="bg-black text-white relative">
            <img
                src={bigGrid}
                alt="Grid Background"
                className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0"
            />

            {/* Fade arriba */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#1022FF] via-[#0E1EE0]/64 to-transparent z-2 pointer-events-none" />

            {/* Fade abajo */}
            <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-[#000000] via-[#0E1EE0]/64 to-[#0A1499]/0 z-2 pointer-events-none" />

            {/* Data & Slider Section */}
            <div className="bg-gradient-to-b from-[#1022FF] via-[#0E1EE0]/64 to-black pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[40px] md:pb-[80px] lg:pb-[200px] min-h-[800px]">
                <div className="relative w-full lg:max-w-[1280px] pb-10 md:pb-[60px] lg:pb-0 px-[20px] md:px-[40px] lg:px-6 mx-auto flex flex-col items-center">
                    <h2 className="text-[32px] sm:text-[35px] lg:text-[45px] font-medium leading-none text-center sm:text-left">
                        With the <span className="font-extrabold block sm:inline">Strongest Results</span> 
                    </h2>

                    <div className="flex flex-col md:flex-row justify-evenly pt-[40px] md:pt-[60px] pb-[60px] md:pb-[80px] w-full">
                        {/* +500M Total Views */}
                        <div className="leading-none flex flex-col items-center">
                            <p className="font-bold text-[75px] sm:text-[100px] lg:text-[140px]">
                            +
                            <CountUp
                                end={500}
                                duration={1.5}
                                suffix="M"
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                            />
                            </p>
                            <p className="italic text-[28px] sm:text-[35px] lg:text-[45px]">Total Views</p>
                        </div>

                        {/* +90M Client's Revenue */}
                        <div className="leading-none flex flex-col items-center">
                            <p className="font-bold text-[75px] sm:text-[100px] lg:text-[140px]">
                            +
                            <CountUp
                                end={90}
                                duration={1.5}
                                suffix="M"
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                            />
                            </p>
                            <p className="italic text-[28px] sm:text-[35px] lg:text-[45px]">Client’s Revenue</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a href=' https://calendly.com/lumenstudio/30min' target='blank_' className="w-60 md:w-80 inline-flex justify-center items-center px-6 py-3 bg-[#1123FF] text-white font-bold text-[20px] md:text-[25px] rounded-[10px] md:rounded-[15px] lg:rounded-[20px] transition-all duration-300 group shadow-[4px_4px_0px_white,5px_5px_0px_black,8px_8px_0px_white] hover:-translate-y-3 transform">
                            <span>Let’s chat!</span>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2 text-[22px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                        </a>
                    </div>
                </div>

                <div className="mt-[60px] pb-[100px] lg:pb-[120px]">
                    <h2 className="text-[32px] sm:text-[35px] lg:text-[45px] font-medium leading-none text-center pb-[30px] md:pb-[40px] lg:pb-[60px]">
                        Long-Form <span className="font-extrabold block sm:inline">Content</span> 
                    </h2>
                    <div ref={containerRef}>
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Pagination, Autoplay]}
                            spaceBetween={80}
                            loop={true}
                            speed={5000}
                            slidesPerView="auto"
                            centeredSlides={true}
                            grabCursor={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                el: '.swiper-custom-pagination-2',
                                type: 'progressbar',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                        {[...videos, ...videos].map((video, index) =>(
                            <SwiperSlide key={`${video.id}-${index}`} className="min-w-[300px] w-auto">
                                <div
                                    onClick={() => {
                                        setVideoUrl(`https://www.youtube.com/embed/${video.id}?autoplay=1`);
                                        setVideoType('long');
                                        }
                                    }
                                    className="relative cursor-pointer group"
                                >
                                    <img
                                        src={video.img}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 left-0 text-[20px] sm:text-[20px] lg:text-[45px] italic text-white leading-none bg-[#1022FF] px-3 py-3">
                                        {video.views} <span className='block text-[12px] lg:text-[18px]'>views</span>
                                    </div>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <span className="text-white text-4xl">▶</span>
                                </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                        <div className="swiper-custom-pagination-2 mt-20 h-1 bg-white overflow-hidden">
                            <div className="swiper-pagination-progressbar-fill bg-[#1022FF] absolute top-0 left-0 h-full w-0 transition-all duration-300"></div>
                        </div>

                        {/* Modal para el video */}
                        {videoUrl && videoType === 'long' && (
                            <div
                                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                                onClick={() => {
                                setVideoUrl(null);
                                setVideoType(null);
                                }}
                            >
                                <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
                                    <iframe
                                        src={videoUrl}
                                        title="YouTube video"
                                        allow="autoplay; fullscreen"
                                        className="w-full h-full rounded-lg"
                                    />
                                    <button
                                        onClick={() => {
                                        setVideoUrl(null);
                                        setVideoType(null);
                                        }}
                                        className="absolute top-2 right-2 text-white text-2xl"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-[60px]">
                    <h2 className="text-[32px] sm:text-[35px] lg:text-[45px] font-medium leading-none text-center pb-[30px] md:pb-[40px] lg:pb-[60px]">
                        Short-Form <span className="font-extrabold block sm:inline">Content</span> 
                    </h2>
                    <div ref={shortsContainerRef}>
                        <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Pagination, Autoplay]}
                        spaceBetween={80}
                        loop={true}
                        speed={5000}
                        slidesPerView="auto"
                        centeredSlides={true}
                        grabCursor={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.swiper-custom-pagination-shorts',
                            type: 'progressbar',
                        }}
                        /*   breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }} */
                        >
                        {[...shortVideos, ...shortVideos].map((item, index) => (
                            <SwiperSlide
                            key={`short-local-${index}`}
                            className="min-w-[300px] !w-[80%] md:!w-[50%] lg:!w-[21%] flex-shrink-0 relative"
                            >
                            <div
                                onClick={() => {
                                setVideoUrl(item.video);
                                setVideoType('local');
                                setSelectedVideo(item);
                                }}
                                className="relative cursor-pointer group overflow-visible"
                            >
                                {/* VIDEO */}

                                <video
                                src={item.video}
                                className="w-full h-full pointer-events-auto aspect-[9/16]"
                                muted
                                autoPlay
                                loop
                                playsInline
                                preload="none"
                                />

                                {/* Views */}
                                <div className="absolute top-0 left-0 text-[20px] sm:text-[20px] lg:text-[45px] italic text-white leading-none bg-[#1022FF] px-6 py-3 z-[999] opacity-100 views-overlay">
                                {item.views}
                                <span className="block text-[16px] lg:text-[18px]">views</span>
                                </div>

                                {/* Play icon hover */}
                                <div className="hidden sm:flex absolute inset-0 bg-black/40 items-center justify-center opacity-0 group-hover:opacity-100 transition z-20">
                                <span className="text-white text-4xl">▶</span>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>


                        <div className="swiper-custom-pagination-shorts mt-20 h-1 bg-white overflow-hidden">
                            <div className="swiper-pagination-progressbar-fill bg-[#1022FF] absolute top-0 left-0 h-full w-0 transition-all duration-300"></div>
                        </div>
                    </div>
                    {videoUrl && videoType === 'local' && selectedVideo && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => {
                        setVideoUrl(null);
                        setVideoType(null);
                        setSelectedVideo(null);
                        }}
                    >
                        <div
                        className="relative w-full max-w-[400px] aspect-[9/16]"
                        onClick={(e) => e.stopPropagation()}
                        >
                        {/* Overlay estilo YouTube */}
                        <div className="absolute top-0 left-0 w-full flex justify-between items-start px-4 py-2 bg-gradient-to-b from-black/80 to-transparent z-20 rounded-lg">
                            <div>
                            <a href={`https://www.youtube.com/shorts/${selectedVideo.id}`} target="_blank">    
                                <p className="text-white text-[18px]">{selectedVideo.title}</p>
                            </a>
                            </div>
                            <button
                            onClick={() => {
                                setVideoUrl(null);
                                setVideoType(null);
                                setSelectedVideo(null);
                            }}
                            className="text-white text-xl hover:text-gray-300"
                            >
                            ✕
                            </button>
                        </div>

                        {/* Video */}
                        <video
                            src={videoUrl}
                            className="w-full h-full rounded-lg"
                            controls
                            autoPlay
                            playsInline
                        />
                        </div>
                    </div>
                    )}

                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-white pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[40px] md:pb-[80px] lg:pb-[120px] px-6">
                <div className="relative w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">
                    <div className="text-black text-[25px] sm:text-[35px] lg:text-[45px] font-medium leading-none w-full">
                        <p>
                            We’re a robust team with over 10 years experience in content creation for different platforms.
                        </p>
                        <br />
                        <p>
                            With internal systems and workflows that ensures a high level of production, performance and reliability.
                        </p>
                        <br />
                        <p className="font-extrabold">
                            WE LOVE WHAT WE DO.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-center w-full">
                        <img src={team} alt="Team Lumen" className="w-90 h-auto" />
                    </div> 

                </div>
            </div>
            
            {/* CTA Footer Section */}
            <div className="bg-gradient-to-b from-[#1022FF] via-[#0E1EE0]/64 to-[#0A1499]/0 pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[40px] md:pb-[80px] lg:pb-[200px]">
                <div className="relative w-full lg:max-w-[1280px] pb-10 md:pb-[60px] lg:pb-0 px-[20px] md:px-[40px] lg:px-6 mx-auto flex flex-col items-center">
                    <div className="flex flex-col items-center md:flex-row justify-around pt-[40px] md:pt-[60px] pb-[60px] md:pb-[80px] w-full">
                        <div className="leading-none flex flex-col">
                            <h2 className="text-[40px] sm:text-[45px] lg:text-[65px] font-medium leading-none text-center sm:text-left">
                                We Will See<br />
                                You Soon.
                                <br />
                                <br />
                                <span className="font-extrabold">Trust Us.</span>
                            </h2>
                        </div>
                        <div className="flex flex-col pt-[40px] md:pt-0">
                            <a href=' https://calendly.com/lumenstudio/30min' target='blank_' className="w-60 md:w-80 inline-flex justify-center items-center px-6 py-3 bg-[#1123FF] text-white font-bold text-[20px] md:text-[25px] rounded-[10px] md:rounded-[15px] lg:rounded-[20px] transition-all duration-300 group shadow-[4px_4px_0px_white,5px_5px_0px_black,8px_8px_0px_white] hover:-translate-y-3 transform">
                                <span>Let’s chat!</span>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="ml-2 text-[22px] transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

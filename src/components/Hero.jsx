import podsLogo from '../assets/images/pods-logo.png';
import bgVideo from '../assets/video/PodsByLumen_Reel.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import heroPlaceholder from "../assets/images/hero-sec--background-video.png"; // Ajusta la ruta según tu proyecto


export default function Hero() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="relative min-h-screen flex items-end lg:items-center justify-center text-white overflow-hidden">
            {/* contenedor del video + overlay */}
            <div className="absolute inset-0 p-3 md:p-5 z-0">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">

                    {/* Placeholder mientras carga */}
                    {!videoLoaded && (
                    <img
                        src={heroPlaceholder}
                        alt="Hero background"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                    )}

                    {/* Iframe Vimeo */}
                    <iframe
                    src="https://player.vimeo.com/video/1108915221?api=1&background=1&autoplay=1&muted=1&loop=1"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                w-[100vw] h-[95vw] min-h-full min-w-[177.77vh]"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setVideoLoaded(true)} // Cuando el iframe carga, ocultamos el placeholder
                    ></iframe>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1125ffbe] to-transparent" />
                </div>
            </div>



            {/* Logo */}
            <img src={podsLogo} className="logo react absolute top-[60px] z-20 w-40 md:w-auto" alt="Pods by Lumen" />

            {/* Contenido */}
                <div className="relative z-20 w-full lg:max-w-[1280px] pb-10 md:pb-[60px] lg:pb-0 px-[20px] md:px-[40px] lg:px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-evenly">
                    <h1 className="text-[40px] sm:text-[60px] lg:text-[85px] font-medium leading-none text-left">
                        We help <br />
                        <span className="font-extrabold">Creators</span><br />
                        make their <br />
                        <span className="font-extrabold">Best Content</span>
                    </h1>

                    <div className="mt-8">
                    <a href=' https://calendly.com/lumenstudio/30min' target='blank_' className="w-60 md:w-80 inline-flex justify-center items-center px-6 py-3 bg-[#1123FF] text-white font-bold text-[20px] md:text-[25px] rounded-[10px] md:rounded-[15px] lg:rounded-[20px] transition-all duration-300 group shadow-[4px_4px_0px_white,5px_5px_0px_black,8px_8px_0px_white] hover:-translate-y-3 transform">
                        <span>Let’s chat!</span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-[22px] transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    </div>
                </div>
        </section>

    );
}

import podsLogo from '../assets/images/pods-logo.png';
import bgVideo from '../assets/video/Podsbylumen-Reel-1.mp4';
import backgroundImage from '../assets/images/hero-sec--background-video.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react'; // Necesario para usar el estado


export default function Hero() {

    const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Estado para controlar si el video está cargado

    // Función para detectar cuando el video se ha cargado
    const handleVideoLoad = () => {
        setIsVideoLoaded(true); // Cambiamos el estado a true cuando el video se carga
    };

    return (
        <section className="relative min-h-screen flex items-end lg:items-center justify-center text-white overflow-hidden">
            {/* Contenedor del video + overlay */}
            <div className="absolute inset-0 p-3 md:p-5 z-0">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    {/* Si el video aún no se ha cargado, muestra la imagen de fondo */}
                    {!isVideoLoaded && (
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                       /*  <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }} /> */
                    )}

                    {/* Video que se reproduce automáticamente */}
                    <video
                        src={bgVideo}
                        autoPlay
                        loop
                        muted
                        preload="auto"
                        className="w-full h-full object-cover"
                        onLoadedData={handleVideoLoad} // Detecta cuando el video está listo
                    />

                    {/* Overlay solo sobre el video */}
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

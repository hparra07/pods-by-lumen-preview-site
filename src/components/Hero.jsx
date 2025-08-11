import podsLogo from '../assets/images/pods-logo.png';
import bgVideo from '../assets/video/Podsbylumen-Reel-1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-end lg:items-center justify-center text-white overflow-hidden">
            {/* contenedor del video + overlay */}
            <div className="absolute inset-0 p-3 md:p-5 z-0">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    
                    {/* <iframe src="https://player.vimeo.com/video/1108915221?autoplay=1&loop=1&muted=1&background=1&badge=0" className="w-[100vw] h-[100vh] aspect-[16/9] object-cover" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /> */}

                    <video
                        src={bgVideo}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
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

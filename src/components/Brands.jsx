import toyotaLogo from '../assets/images/toyota.png';
import crocsLogo from '../assets/images/crocs.png';
import primevideoLogo from '../assets/images/primevideo.png';
import linkedinLogo from '../assets/images/linkedin.png';
import lickdLogo from '../assets/images/lickd.png';
import mrbeastLogo from '../assets/images/feastables.png';
import fiverrLogo from '../assets/images/fiver.png';
import spotterLogo from '../assets/images/spotter.png';
import uscreenLogo from '../assets/images/Uscreen.png';
import samsungLogo from '../assets/images/samsung.png';
import invidioLogo from '../assets/images/invideo-ai.png';
import riversideLogo from '../assets/images/Riverside-Logo.png';

export default function Brands() {
    return (
        <section className="w-full lg:max-w-[1440px] mx-auto py-20 bg-white text-black pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[60px] md:pb-[140px] lg:pb-[200px]">
            <div className="px-6 text-center">
                <h2 className="text-[32px] sm:text-[35px] lg:text-[45px] font-medium leading-none">
                    And for <span className="font-extrabold block md:inline">The Biggest</span>
                </h2>

                <div className="mt-[40px] md:mt-[60px] grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 lg:gap-12 items-center justify-items-center">
                {/* Logos */}
                    <img src={toyotaLogo} alt="Toyota" className="h-10 md:h-20 object-contain" />
                    <img src={crocsLogo} alt="Crocs" className="h-10 object-contain" />
                    <img src={primevideoLogo} alt="Prime Video" className="h-13 object-contain" />
                    <img src={linkedinLogo} alt="LinkedIn" className="h-10 object-contain" />
                    <img src={lickdLogo} alt="LICDK" className="h-20 object-contain" />
                    <img src={mrbeastLogo} alt="Feastables" className="h-15 object-contain" />
                    <img src={fiverrLogo} alt="Fiverr" className="h-10 object-contain" />
                    <img src={spotterLogo} alt="Spotter Studio" className="h-10 object-contain" />
                    <img src={uscreenLogo} alt="Uscreen" className="h-10 object-contain" />
                    <img src={samsungLogo} alt="Samsung" className="h-8 object-contain" />
                    <img src={invidioLogo} alt="InVideo AI" className="h-10 object-contain block md:hidden" />
                    <img src={riversideLogo} alt="Riverside" className="h-10 object-contain block md:hidden" />
                    <div className="col-span-full flex justify-center items-center gap-12">
                        <img src={invidioLogo} alt="InVideo AI" className="h-5 md:h-10 object-contain hidden md:block" />
                        <img src={riversideLogo} alt="Riverside" className="h-5 md:h-10 object-contain hidden md:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}

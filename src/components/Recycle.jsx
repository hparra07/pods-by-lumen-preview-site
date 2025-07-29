
import teamOne from '../assets/images/team--one.png';
import teamTwo from '../assets/images/team--two.png';
import teamThree from '../assets/images/team--three.png';
import teamFour from '../assets/images/team--four.png';
import teamFive from '../assets/images/team--five.png'; 


export default function Recycle() {
    return (
        <section className="bg-black text-white p-[20px] md:p-[80px]">
                    <div className="grid grid-cols-3 grid-rows-3 gap-6 place-items-center">
                        <div className="col-start-1 row-start-1">
                            <img src={teamOne} alt="Team One" className="w-70" />
                        </div>

                        <div className="col-start-3 row-start-1">
                            <img src={teamTwo} alt="Team Two" className="w-70" />
                        </div>

                        <div className="col-start-2 row-start-2">
                            <img src={teamThree} alt="Team Three" className="w-48" />
                        </div>

                        <div className="col-start-1 row-start-3">
                            <img src={teamFour} alt="Team Four" className="w-48" />
                        </div>

                        <div className="col-start-3 row-start-3">
                            <img src={teamFive} alt="Team Five" className="w-48" />
                        </div>
                    </div> 
                   {/* <img src={teamOne} alt="Team One" />
                        <img src={teamTwo} alt="Team Two" />
                        <img src={teamThree} alt="Team Three" />
                        <img src={teamFour} alt="Team Four" />
                        <img src={teamFive} alt="Team Five" /> */}
        </section>
    );
}
import ExperiencePic from "../assets/experience-pic.png";
import LineLG from "../assets/line-lg.png";

export const Experience = () => {
  return (
    <>
        <div className="min-h-screen space-y-5 flex flex-col md:grid md:grid-cols-2">

            {/* left */}
            <div className="flex flex-col sm:px-26 items-center md:items-start space-y-9 mb-8 md:px-20 md:py-5 justify-center">
               <div className="space-y-3">
                    <span id="span-text" className="text-4xl font-bold">Great experience  <br /> with coinbase</span>
                    <img src={LineLG} alt="" />
               </div>
                
                <h2 className="leading-9 text-center md:text-start">
                    CoinBase is an online site and a p2admin platform that allows
                    users to buy, sell and/ or exchange digital and fiat assets safely.
                    Owned and managed by CoinBase Business Services established
                    and Incoperated in Nigeria.
                </h2>

                <span className="rounded-full px-9 py-3" id="button">Discover</span>

            </div>

            {/* right */}
            <div className="flex items-center justify-center">
                <img className="" src={ExperiencePic} alt="" />
            </div>

            
        </div>
    </>
  )
}

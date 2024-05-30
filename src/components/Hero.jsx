import { HERO_CONTENT } from "../constants/content";
import SahilJohariProfile from "../assets/SahilJohariProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-50 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Sahil Johari
            </h1>
            <span className="mt-20 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-16">
          <div className="flex justify-center h-25">
            <img src={SahilJohariProfile} alt="SahilJohariProfile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

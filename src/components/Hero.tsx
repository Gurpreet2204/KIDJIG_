
import Hearder from "./Hearder";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="background-image bg-cover bg-center w-full h-screen relative">
        <div>
          <div
            className="ellipse-img absolute w-48 h-16 left-2 top-10 bg-[#101c5c] bg-opacity-60 filter blur-[50px] 
            lg:w-[668px] lg:h-[461px] lg:left-[405px] lg:top-[-297px]"
          >
             <div className="ellipse-img2 absolute w-56 h-28 left-64 top-15 lg:w-[770px] lg:h-[456px] lg:left-[360px] lg:top-[-225px] bg-[rgba(16,28,92,0.64)] filter blur-[50px]"></div>
             </div>
          <div>
            <Hearder />
            <div>
              <div className="text-white w-full max-w-[778px] h-auto absolute top-[150px] left-4 lg:top-[270px] lg:left-[279px] p-4 lg:p-0">
                <div>
                  <h1 className="font-normal text-[32px] leading-[36px] lg:text-[56px] lg:leading-[60px]">
                    Empowering Lives Through Innovative <b className="underline decoration-indigo-400">AI</b> Technologies.
                  </h1>
                  <p className="font-normal text-[16px] py-4 text-gray-300 leading-6 tracking-[-0.01em] lg:text-[22px] lg:leading-7">
                    Finding new horizons for visionaries to accelerate their innovation and progress.
                  </p>
                  <div className="flex flex-col gap-3 mt-4 lg:flex-row lg:gap-5">
                    <button className="border-none text-center rounded-xl bg-indigo-600 px-6 py-2 font-semibold text-sm lg:text-lg leading-relaxed tracking-tight lg:px-8 lg:py-3">
                      Explore Our Services
                    </button>
                    <button className="border border-blue-600 rounded-lg px-6 py-2 font-semibold text-sm lg:text-lg lg:px-7">
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="w-screen mt-10 lg:mt-20">
                  <p className="font-normal text-lg lg:text-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#423f3f]">
                      From Ideas to Software Solutions
                    </span>
                    💡✨
                    <span className="">From Ideas to Software Solutions</span>
                    🌟✨
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#797979] via-[#E3E3E3] to-[#1C1C1C]">
                      From Ideas to
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

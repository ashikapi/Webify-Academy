import new1 from '@/public/images/new1.jpg';
import new2 from '@/public/images/new2.jpg'

const HomeHero = () => {
  return (
    <div className="pb-10 bg-[rgb(0,55,85)]">
      <div className="lg:p-20 md:p-10 p-6 flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4 md:space-y-6">
          <h1 className="text-white font-jost text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Become An IT Pro & Rule The
            <span className="text-[#22C55E] font-extrabold"> Digital World</span>
          </h1>

          <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed font-roboto italic max-w-2xl mx-auto lg:mx-0">
            Explore a wide range of courses designed to help you excel
            in your career and personal growth. Learn from industry experts,
            gain hands-on experience, and achieve your goals with our comprehensive
            learning platform.
          </p>

          <div className="pt-2">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#27a756] text-white rounded-lg hover:bg-[#147839] transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="text-lg sm:text-xl font-jost font-semibold">Get Started</span>
            </button>
          </div>
        </div>

        {/* Image Section with overlapping effect */}
        <div className="lg:w-1/2 w-full flex justify-center items-center relative px-4 sm:px-8 lg:px-0">
          {/* First Image - Behind with rotation */}
          <div className="w-48 sm:w-60 md:w-72 lg:w-80 relative z-10">
            <img
              src={new1.src}
              alt="Digital Learning"
              className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transform -rotate-3 sm:-rotate-6 hover:rotate-0 transition-all duration-500 ease-in-out hover:scale-105 hover:z-30 border-2 sm:border-4 border-white"
            />
          </div>
          
          {/* Second Image - Overlapping on top */}
          <div className="w-40 sm:w-52 md:w-64 lg:w-72 relative z-20 -ml-12 sm:-ml-16 md:-ml-20 lg:-ml-24 mt-12 sm:mt-14 md:mt-16 lg:mt-20">
            <img
              src={new2.src}
              alt="Digital Learning"
              className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transform rotate-3 sm:rotate-6 hover:rotate-0 transition-all duration-500 ease-in-out hover:scale-105 hover:z-30 border-2 sm:border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
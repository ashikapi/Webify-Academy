import { GiGraduateCap } from "react-icons/gi"; // Icon for education
import { TbBriefcase2Filled } from "react-icons/tb"; // Icon for career insights
import { FaUserTie } from "react-icons/fa"; // Icon for mentorship
import { GrGroup } from "react-icons/gr"; // Icon for networking
import { FaTools } from "react-icons/fa"; // Icon for tools/resources
import { MdOutlineStarRate } from "react-icons/md"; // Icon for strategy
import { GiWorld } from "react-icons/gi"; // Icon for global reach
import { GrCertificate } from "react-icons/gr"; // Icon for certification
import { FaClipboardCheck } from "react-icons/fa"; // Icon for job placement

const WebifyAcademy = () => {
  // Array of feature objects representing institute benefits
const features = [
  {
    title: "Structured & Career-Focused Learning",
    description:
      "Webify Academy follows a carefully designed learning path that helps students build strong foundations and gradually advance toward professional-level IT skills.",
    subDescription:
      "Flexible learning options including online classes, live sessions, and recorded resources.",
    icon: <GiGraduateCap />,
  },
  {
    title: "Industry-Oriented Practical Experience",
    description:
      "Our courses emphasize hands-on learning through real-world projects, case studies, and practical assignments aligned with current industry demands.",
    subDescription:
      "Students gain experience working on real scenarios used in professional environments.",
    icon: <TbBriefcase2Filled />,
  },
  {
    title: "Expert Guidance & Mentorship",
    description:
      "Learn directly from experienced industry professionals who provide valuable insights, career advice, and continuous guidance throughout your learning journey.",
    subDescription:
      "Personalized mentorship ensures focused growth and confidence building.",
    icon: <FaUserTie />,
  },
  {
    title: "Strong Learning Community & Networking",
    description:
      "Webify Academy fosters a collaborative environment where learners connect, share knowledge, and grow together as a professional community.",
    subDescription:
      "Engage with peers, mentors, and alumni to expand your professional network.",
    icon: <GrGroup />,
  },
  {
    title: "Access to Modern Tools & Resources",
    description:
      "Students receive access to essential tools, learning materials, and industry-standard software to enhance productivity and skill development.",
    subDescription:
      "Learn how to use modern tools effectively in real-world projects.",
    icon: <FaTools />,
  },
  {
    title: "Global Career & Market Readiness",
    description:
      "Our curriculum prepares students for both local and international job markets, focusing on global standards and remote work opportunities.",
    subDescription:
      "Understand global trends, workflows, and professional expectations.",
    icon: <GiWorld />,
  },
  {
    title: "Performance Tracking & Certification",
    description:
      "Structured assessments and progress tracking keep students accountable and motivated throughout their learning journey.",
    subDescription:
      "Earn recognized certificates to strengthen your professional profile.",
    icon: <GrCertificate />,
  },
  {
    title: "Personal Brand & Career Strategy",
    description:
      "We guide students in building a strong professional identity, improving portfolios, and developing career strategies aligned with their goals.",
    subDescription:
      "Stand out in the competitive IT and freelancing market.",
    icon: <MdOutlineStarRate />,
  },
  {
    title: "Career Support & Job Opportunities",
    description:
      "Webify Academy provides career support, guidance, and opportunities to help students transition confidently into jobs or freelance careers.",
    subDescription:
      "Get assistance with job preparation, interviews, and real opportunities.",
    icon: <FaClipboardCheck />,
  },
];


  return (
    // Section wrapper with vertical spacing
    <div className="w-full h-auto flex justify-center items-center">
      <div className="lg:p-20 md:p-10 p-2">
        {/* Section heading */}
        {/* <h1 className="lg:text-4xl text-xl text-center font-jost font-semibold lg:pt-0 md:pt-10 pt-20 mb-10">
          Why <span className="text-[rgb(255,193,7)]">Friends Goal IT Institute</span> ?
        </h1> */}

                {/* Enhanced Eye-Catching Title Section */}
                <div className="text-center mb-16 lg:pt-0 md:pt-10 pt-20 relative">
          {/* Main Title with Multiple Animated Elements */}
          <h1 className="lg:text-5xl md:text-2xl text-xl font-jost font-bold relative inline-block">
            Why{" "}
            <span className="relative inline-block mx-2">
              <span className="relative z-10 bg-gradient-to-r from-[#0EA5A4] via-[#22C55E] to-[#F97316] bg-clip-text text-transparent animate-pulse">
                Webify Academy
              </span>
              
              {/* Animated Gradient Underline */}
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#0EA5A4] via-[#22C55E] to-[#F97316] opacity-80 animate-pulse"></span>
              
              {/* Animated Dots Trail */}
              <span className="absolute -bottom-4 left-0 w-full flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-[#0EA5A4] rounded-full animate-bounce"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '1.5s'
                    }}
                  ></span>
                ))}
              </span>
  
              {/* Floating Particles */}
              <span className="absolute -top-4 -left-2 w-2 h-2 bg-[#0EA5A4] rounded-full animate-ping"></span>
              <span className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></span>
            </span>{" "}
            ?
          </h1>
  
          {/* Decorative Corner Elements */}
          <div className="absolute md:-top-4 top-10 md:-left-4  w-8 h-8 border-t-2 border-l-2 border-[#0EA5A4] animate-pulse"></div>
          <div className="absolute md:-top-4 top-10 md:-right-4 right-0 w-8 h-8 border-t-2 border-r-2 border-[#22C55E] animate-pulse"></div>
          <div className="absolute md:-bottom-4 md:-left-4 w-8 h-8 border-b-2 border-l-2 border-[#22C55E] animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute md:-bottom-4 md:-right-4 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0EA5A4] animate-pulse" style={{animationDelay: '0.3s'}}></div>
  
          {/* Animated Center Accent */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent animate-pulse rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0eaa9a] rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Responsive grid layout for feature cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 pt-10 pb-10 ml-4 mr-4">
          {features.map((feature, index) => (
            // Individual feature card
            <div
              key={index}
              className="group flex flex-col items-start text-start p-6 bg-gray-100
              border-b-4 border-[#c5e0dc] hover:shadow-md transform
              transition-all duration-150 hover:scale-105 rounded-md custom-card"
            >
              <div className="flex justify-normal gap-4">
                {/* Icon with hover effect */}
                <div className="content lg:text-3xl text-2xl">
                  <p className="bg-[#c5e0dc] rounded-md group-hover:bg-black
                  transition-all duration-300 group-hover:text-white lg:p-4 p-2">
                    {feature.icon}
                  </p>
                </div>

                {/* Feature title and descriptions */}
                <div className="content font-jost">
                  <h3 className="lg:text-2xl text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-sm text-black">{feature.description}</p>
                  <p className="text-sm text-black mt-4">{feature.subDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporting the component for use in other pages
export default WebifyAcademy;
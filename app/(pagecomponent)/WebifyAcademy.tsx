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
      title: "Structured Learning Environment",
      description: "Friends Goal IT Institute provides a well-organized curriculum, ensuring students learn progressively from foundational concepts to advanced freelancing techniques.",
      subDescription: "Flexible Learning: Both online and offline classes to suit your schedule.",
      icon: <GiGraduateCap />,
    },
    {
      title: "Practical, Real-World Insights",
      description: "Courses often include case studies, real-world examples, and live projects that teach students how to navigate the freelancing marketplace effectively.",
      subDescription: "Direct guidance on platforms like Upwork, Fiverr, and Freelancer can be invaluable.",
      icon: <TbBriefcase2Filled />,
    },
    {
      title: "Expert Mentorship",
      description: "Learning from experienced instructors can help students gain insider tips and tricks for building a strong portfolio, crafting winning proposals, and dealing with clients professionally.",
      subDescription: "Personal mentorship ensures tailored guidance and feedback.",
      icon: <FaUserTie />,
    },
    {
      title: "Networking Opportunities",
      description: "Our Institute connects students with a community of like-minded individuals, fostering collaboration and support among peers.",
      subDescription: "Networking with successful alumni can also open doors to partnerships or mentorship.",
      icon: <GrGroup />,
    },
    {
      title: "Access To Tools And Resources",
      description: "Friends Goal IT Institute often provides access to premium tools, templates, and software that can be expensive for individuals to acquire on their own.",
      subDescription: "Learning how to use freelancing-related tools professionally can save time and improve efficiency.",
      icon: <FaTools />,
    },
    {
      title: "Focus On Local And Global Markets",
      description: "Your courses may specifically address freelancing challenges and opportunities in local and international markets, giving students a broader perspective.",
      subDescription: "This provides insight into global markets and freelancing trends.",
      icon: <GiWorld />,
    },
    {
      title: "Accountability And Certification",
      description: "A structured program ensures accountability, motivating students to complete the course on time.",
      subDescription: "Certifications provided upon completion can enhance credibility in the freelancing world.",
      icon: <GrCertificate />,
    },
    {
      title: "Customized Freelancing Strategies",
      description: "Guidance on building a strong personal brand, identifying niches, and setting competitive rates tailored to the learner’s skills and goals.",
      subDescription: "These strategies help students succeed in freelancing.",
      icon: <MdOutlineStarRate />,
    },
    {
      title: "Job Placement And Freelance Opportunities",
      description: "Some institutes offer support in landing the first freelance job, helping students gain the initial momentum they need to grow their careers.",
      subDescription: "Job placement assistance ensures students have a smoother transition to freelancing.",
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
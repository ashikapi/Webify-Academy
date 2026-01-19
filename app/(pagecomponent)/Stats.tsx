// 'use client';
// import React, { useState, useEffect, useRef } from "react";
// import { Monitor, UserCheck, Users } from "lucide-react";

// type Stat = {
//   icon: React.ReactNode;
//   number: number;
//   title: string;
//   subtitle: string;
// };

// const stats: Stat[] = [
//   { icon: <Monitor />, number: 300, title: "Topics", subtitle: "CHOOSE YOUR CHOICE" },
//   { icon: <Users />, number: 8000, title: "Students", subtitle: "BRIGHT FUTURE" },
//   { icon: <UserCheck />, number: 150, title: "Instructors", subtitle: "TRAINED PROFESSIONALS" },
// ];

// const Stats: React.FC = () => {
//   const [inView, setInView] = useState(false);
//   const [counts, setCounts] = useState([0, 0, 0]);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach(e => e.isIntersecting && setInView(true)),
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!inView) return;
//     const duration = 4500;
//     const steps = 60;
//     const interval = duration / steps;

//     stats.forEach((stat, index) => {
//       let current = 0;
//       const inc = stat.number / steps;
//       const timer = setInterval(() => {
//         current += inc;
//         if (current >= stat.number) {
//           current = stat.number;
//           clearInterval(timer);
//         }
//         setCounts(p => {
//           const n = [...p];
//           n[index] = Math.floor(current);
//           return n;
//         });
//       }, interval);
//     });
//   }, [inView]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full lg:py-20 md:py-16 pb-14 lg:px-20 md:px-10 px-6 overflow-hidden bg-white"
//     >
//       {/* Background Blobs */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-[#0EA5A4] rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-20 right-10 w-72 h-72 bg-[#22C55E] rounded-full blur-3xl animate-pulse delay-2000"></div>
//         <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#0EA5A4] rounded-full blur-3xl animate-pulse delay-4000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Title */}
//         <div className="text-center mb-16 relative">
//           <h1 className="lg:text-5xl md:text-3xl text-xl font-jost font-bold">
//             Our{" "}
//             <span className="relative inline-block mx-2">
//               <span className="bg-gradient-to-r from-[#0EA5A4] to-[#22C55E] bg-clip-text text-transparent animate-pulse">
//                 Achievements
//               </span>

//               <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent animate-pulse"></span>

//               <span className="absolute -bottom-4 left-0 w-full flex justify-center space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <span
//                     key={i}
//                     className="w-1.5 h-1.5 bg-[#0EA5A4] rounded-full animate-bounce"
//                     style={{ animationDelay: `${i * 0.1}s` }}
//                   />
//                 ))}
//               </span>

//               <span className="absolute -top-4 -left-2 w-2 h-2 bg-[#22C55E] rounded-full animate-ping"></span>
//               <span className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-[#0EA5A4] rounded-full animate-ping delay-500"></span>
//             </span>
//           </h1>

//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1">
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent animate-pulse rounded-full"></div>
//             <div className="absolute inset-0 m-auto w-2 h-2 bg-[#0EA5A4] rounded-full animate-ping"></div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {stats.map((s, i) => (
//             <div
//               key={i}
//               className="group relative"
//               style={{ animation: inView ? `slideUp 0.6s ease ${i * 0.2}s both` : "none" }}
//             >
//               <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#0EA5A4]/20 hover:-translate-y-2">
//                 <div className="flex flex-col items-center gap-4">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5A4] to-[#22C55E] blur-xl opacity-40"></div>
//                     <div className="relative text-6xl p-6 rounded-2xl bg-gradient-to-br from-[#0EA5A4] to-[#22C55E] text-white shadow-lg group-hover:scale-110 transition-all">
//                       {s.icon}
//                     </div>
//                   </div>

//                   <h3 className="text-2xl font-bold text-center">
//                     <span className="bg-gradient-to-r from-[#0EA5A4] to-[#22C55E] bg-clip-text text-transparent">
//                       {counts[i].toLocaleString()}+
//                     </span>{" "}
//                     {s.title}
//                   </h3>

//                   <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5A4] to-[#22C55E] rounded-full"></div>

//                   <p className="text-sm tracking-widest uppercase text-gray-600">
//                     {s.subtitle}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Stats;
'use client';
import React, { useState, useEffect, useRef } from "react";
import { Monitor, UserCheck, Users } from "lucide-react";

type Stat = {
  icon: React.ReactNode;
  number: number;
  title: string;
  subtitle: string;
};

const stats: Stat[] = [
  {
    icon: <Monitor />,
    number: 300,
    title: "Topics",
    subtitle: "CHOOSE YOUR CHOICE",
  },
  {
    icon: <Users />,
    number: 8000,
    title: "Students",
    subtitle: "BRIGHT FUTURE",
  },
  {
    icon: <UserCheck />,
    number: 150,
    title: "Instructors",
    subtitle: "TRAINED PROFESSIONALS",
  },
];

const Stats: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 4500;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.number) {
          currentCount = stat.number;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, interval);
    });
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full lg:py-20 md:py-16 sm:pb-0 pb-14 lg:px-20 md:px-10 px-6 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-4 border-blue-500 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border-4 border-purple-500 rotate-45" style={{ animation: 'spin 8s linear infinite' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Title Section */}
        {/* <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold px-8 py-4 rounded-2xl inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-2xl shadow-blue-500/30">
            Our Achievements
          </h2>
        </div> */}
        {/* Enhanced Eye-Catching Title Section */}
        <div className="text-center mb-16 lg:pt-0 md:pt-10 pt-20 relative">
          {/* Main Title with Multiple Animated Elements */}
          <h1 className="lg:text-5xl md:text-2xl text-xl font-jost font-bold relative inline-block">
            Our{" "}
            <span className="relative inline-block mx-2">
              <span className="relative z-10 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Achievements
              </span>

              {/* Animated Gradient Underline */}
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80 animate-pulse"></span>

              {/* Animated Dots Trail */}
              <span className="absolute -bottom-4 left-0 w-full flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '1.5s'
                    }}
                  ></span>
                ))}
              </span>

              {/* Floating Particles */}
              <span className="absolute -top-4 -left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
              <span className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></span>
            </span>{" "}

          </h1>

          {/* Decorative Corner Elements */}
           {/* Decorative Corner Elements */}
          <div className="absolute md:-top-4 top-10 md:-left-4  w-8 h-8 border-t-2 border-l-2 border-[#0EA5A4] animate-pulse"></div>
          <div className="absolute md:-top-4 top-10 md:-right-4 right-0 w-8 h-8 border-t-2 border-r-2 border-[#22C55E] animate-pulse"></div>
          <div className="absolute md:-bottom-4 md:-left-4 w-8 h-8 border-b-2 border-l-2 border-[#22C55E] animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute md:-bottom-4 md:-right-4 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0EA5A4] animate-pulse" style={{animationDelay: '0.3s'}}></div>
  

          {/* Animated Center Accent */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>


        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative"
              style={{
                animation: inView ? `slideUp 0.6s ease-out ${i * 0.2}s both` : 'none'
              }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-purple-300 overflow-hidden group-hover:-translate-y-2">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-3xl"></div>

                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-tr-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>

                {/* Content */}
                <div className="relative flex flex-col items-center gap-4">
                  {/* Icon container with animation */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative text-6xl md:text-7xl p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {s.icon}
                    </div>
                  </div>

                  {/* Number and Title */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        {counts[i].toLocaleString()}+
                      </span>
                      <span className="ml-2 text-gray-900">{s.title}</span>
                    </h3>

                    {/* Decorative line */}
                    <div className="w-16 h-1 mx-auto my-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-24 transition-all duration-500"></div>

                    {/* Subtitle */}
                    <p className="text-sm md:text-base tracking-widest uppercase text-gray-600 font-medium">
                      {s.subtitle}
                    </p>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.4s' }}></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;

'use client';
import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube,} from "lucide-react";
// import { NavLink } from "react-router";
import Link from "next/link";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

type ContactInfo = {
  title: string;
  details?: {
    address: string;
    mobile1: string;
    mobile2: string;
    email: string;
  };
  items?: Array<{
    name?: string;
    url: string;
    icon?: React.ReactNode;
  }>;
};

const Footer: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us - FG IT INSTITUTE";
  }, []);

  const contactInfo: ContactInfo[] = [
    {
      title: "Contact Us",
      details: {
        address:
          "Merul Badda, DIT-Project, Road:0-7, Dhaka",
        mobile1: "+8801878333115",
        mobile2: "+8801766957233",
        email: "ashikapi65@gmail.com",
      },
    },
    {
      title: "Quick Links",
      items: [
        { name: "Home", url: "/home" },
        { name: "Project Overview", url: "/overview" },
        { name: "About Us", url: "/about" },
        { name: "Mission", url: "/mission" },
        { name: "Vision", url: "/vision" },
        { name: "Terms and Conditions", url: "#" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { icon: <Facebook size={18} />, url: "#", name: "Facebook" },
        { icon: <Twitter size={18} />, url: "#", name: "Twitter" },
        { icon: <Instagram size={18} />, url: "#", name: "Instagram" },
        { icon: <Youtube size={18} />, url: "#", name: "YouTube" },
      ],
    },
  ];

  return (
    <div className="relative lg:py-16 md:py-12 py-10 lg:px-16 md:px-10 px-6 mt-20 overflow-hidden" style={{ backgroundColor: 'rgb(239,245,255)' }}>
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(100,100,200,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,200,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with glow effect */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0EA5A4] via-[#F97316] to-[#22C55E] bg-clip-text text-transparent pb-2">
                Let's Connect
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0EA5A4] via-[#F97316] to-[#22C55E] rounded-full blur-xs"></div>
            </div>
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out and let's start a conversation.</p>
        </div>

        {/* Grid layout with glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/80 p-8 rounded-3xl border border-blue-200 transition-all duration-500 hover:bg-white hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-tl-3xl transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/0 group-hover:border-purple-400/50 rounded-br-3xl transition-all duration-500"></div>

              {/* Section title with icon */}
              <div className="relative flex items-center gap-3 mb-6">
                <div className="w-2 h-8 rounded-full bg-gradient-to-b from-[#0EA5A4] via-[#22C55E] to-[#F97316] shadow-lg shadow-blue-400/50"></div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {info.title}
                </h2>
              </div>

              {/* Contact details */}
              {info.details && (
                <ul className="relative space-y-4">
                  <li className="group/item flex items-start gap-4">
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#0EA5A4] to-[#069393] shadow-lg shadow-blue-400/30 group-hover/item:shadow-blue-400/50 group-hover/item:scale-110 transition-all duration-300">
                      <MapPin size={18} className="text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1 text-gray-800 leading-relaxed pt-1">
                      {info.details.address}
                    </div>
                  </li>
                  <li className="group/item flex items-center gap-4">
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#22C55E] to-[#0d913d] shadow-lg shadow-purple-400/30 group-hover/item:shadow-purple-400/50 group-hover/item:scale-110 transition-all duration-300">
                      <Phone size={18} className="text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <a href={`tel:${info.details.mobile1}`} className="text-gray-800 hover:text-[#0EA5A4] transition-colors cursor-pointer">
                      {info.details.mobile1}
                    </a> <br />
                      <a href={`tel:${info.details.mobile2}`} className="text-gray-800 hover:text-[#0EA5A4] transition-colors cursor-pointer">
                      {info.details.mobile2}
                    </a>
                    </div>
                    
                  </li>
                  <li className="group/item flex items-center gap-4">
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#F97316] to-[#c95e12] shadow-lg shadow-indigo-400/30 group-hover/item:shadow-indigo-400/50 group-hover/item:scale-110 transition-all duration-300">
                      <Mail size={18} className="text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <a
                      href={`mailto:${info.details.email}`}
                      className="text-gray-800 hover:text-[#0EA5A4] transition-colors duration-200"
                    >
                      {info.details.email}
                    </a>
                  </li>
                </ul>
              )}

              {/* Links section */}
              {info.items && info.title === "Quick Links" && (
                <ul className="relative space-y-3">
                  {info.items.map((item, i) => (
                    <li key={i} className="group/link">
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 text-gray-800 hover:text-[#22C55E] transition-all duration-300 group-hover/link:translate-x-2 group-hover/link:gap-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0EA5A4] to-[#22C55E] group-hover/link:w-3 group-hover/link:h-3 transition-all duration-300 shadow-lg shadow-blue-400/50"></div>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Social media section */}
              {info.items && info.title === "Follow Us" && (
                <div className="relative">
                  <p className="text-gray-700 text-sm mb-4">Join our community and stay updated</p>
                  <ul className="flex gap-4 flex-wrap">
                    {info.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow us on ${item.name}`}
                          className="relative group/social flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0EA5A4] to-[#22C55E] text-white hover:from-[#0c8686] hover:to-[#1b9d4b] transition-all duration-300 shadow-lg hover:shadow-[#0EA5A4]/50 hover:scale-110 hover:-rotate-6"
                        >
                          {item.icon}
                          <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Bottom section with enhanced design */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5A4] via-[#22C55E] to-[#F97316] flex items-center justify-center font-bold text-white shadow-lg shadow-blue-400/50">
                WA
              </div>
              <p className="text-gray-700">
                © {new Date().getFullYear()}{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5A4] via-[#22C55E] to-[#F97316]">
                  Webify Academy
                </span>
                . All rights reserved. | <span className="underline font-bold italic bg-gradient-to-r from-[#0EA5A4] via-[#22C55E] to-[#F97316] text-transparent bg-clip-text"><a href="https://ashikapi.netlify.app/" target="_blank">Developed by Ashik Api.</a></span>
              </p>
            </div>

            <div className="flex gap-6 text-gray-700">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>

            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-[#0EA5A4] animate-pulse shadow-lg shadow-[#0EA5A4]/50"></div>
              <div className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse shadow-lg shadow-[#F97316]/50" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse shadow-lg shadow-[#22C55E]/50" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
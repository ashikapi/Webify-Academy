"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
// import { NavLink } from 'react-router-dom';
import logo from '@/public/images/Webify Academy_navbar.png';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Project Overview', path: '/overview' },
    { name: 'About Us', path: '/about' },
    { name: 'Mission', path: '/mission' },
    { name: 'Vision', path: '/vision' },
  ];


  return (
    <div className="w-full h-auto fixed z-50 top-0 transition-all bg-white/80">
      {/* Marquee Banner */}
      <div className="bg-[#0A2540] text-[12px] text-white py-[5px] px-2 w-full overflow-hidden">
        <div
          dangerouslySetInnerHTML={{
            __html: `<marquee behavior="scroll" direction="left" scrollamount="5">
        <strong>Become a Digital Success Story with Friends Goal IT Institute </strong>
        Unlock your full potential in the world of freelancing and IT with expert-led courses, real-world projects, and personalized mentorship. From mastering the latest digital skills to building a strong professional brand, Friends Goal IT Institute equips you with the tools, guidance, and confidence to thrive in both local and global markets.
      </marquee>`,
          }}
        ></div>
      </div>

      <div className="lg:px-14 md:px-1 px-5">
        <div className="flex justify-between items-center font-jost md:p-5 p-4">
          {/* Logo section */}
          <div className="w-60 h-10 -ml-6">
            <Link href="/" className="flex items-center gap-2">
              {/* Logo Image */}
              <Image
                src={logo}
                alt="Webify Academy Logo"
                className="w-12 h-10 object-contain"
                priority
              />
              {/* Logo Text */}
              <h1 className="text-xl -ml-2 
           bg-gradient-to-r 
           from-[#0EA5A4] 
           via-[#22C55E] 
           to-[#F97316] 
           bg-clip-text text-transparent font-extrabold ">
                Webify Academy
              </h1>
            </Link>
          </div>

          {/* Desktop navigation menu */}
          <div className="md:flex hidden justify-between items-center lg:gap-10 gap-5 lg:text-md text-sm lg:font-bold font-semibold">
                       {navItems.map((item) => (
              <ul key={item.name} className='lg:font-bold font-semibold lg:text-base text-sm uppercase'
              >
                <Link
                  href={item.path}
                  className={
                    `cursor-pointer ${pathname === item.path ? 'bg-gradient-to-r from-[#0EA5A4] to-[#22C55E] bg-clip-text text-transparent border-b-2 border-[#22C55E]' : 'hover:text-[#22C55E]'}`
                  }
                >
                  {item.name}
                </Link>
              </ul>
            ))}

            {/* Login/Signup button */}
            <div>
              <a href="#"
                target='_blank'>
                <button
                  className="border border-black rounded-lg p-2 bg-gray-100 hover:bg-black hover:text-white transition-all duration-1000"
                // onClick={() => window.open("https://test-fgit.vercel.app/", "_blank")}
                >
                  Login/Signup
                </button>
              </a>
            </div>

          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Mobile menu dropdown */}
          {menuOpen && (
            <ul className="flex flex-col bg-gray-600 mt-4 rounded-lg text-white font-semibold text-base list-none p-4 gap-3 absolute top-20 right-0 w-full xl:w-auto xl:hidden transition-all duration-300">
              <Link
                href="/home"
                onClick={() => setMenuOpen(false)}
                className={
                  `cursor-pointer ${pathname === '/home' ? 'text-yellow-400' : 'hover:text-yellow-400'}`
                }
              >
                Home
              </Link>
              <Link
                href="/overview"
                onClick={() => setMenuOpen(false)}
                className={
                  `cursor-pointer ${pathname === '/home' ? 'text-yellow-400' : 'hover:text-yellow-400'}`
                }
              >
                Project Overview
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={
                  `cursor-pointer ${pathname === '/home' ? 'text-yellow-400' : 'hover:text-yellow-400'}`
                }
              >
                About Us
              </Link>
              <Link
                href="/mission"
                onClick={() => setMenuOpen(false)}
                className={
                  `cursor-pointer ${pathname === '/home' ? 'text-yellow-400' : 'hover:text-yellow-400'}`
                }
              >
                Mission
              </Link>
              <Link
                href="/vision"
                onClick={() => setMenuOpen(false)}
                className={
                  `cursor-pointer ${pathname === '/home' ? 'text-yellow-400' : 'hover:text-yellow-400'}`
                }
              >
                Vision
              </Link>
              <div>
                <a href="#"
                  target='_blank'>
                  <button
                    // onClick={() => window.open("https://test-fgit.vercel.app/", "_blank")}
                    className="border border-black rounded-lg p-2 bg-gray-400 hover:bg-black hover:text-white transition-all duration-1000">
                    Login/Signup
                  </button>
                </a>

              </div>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
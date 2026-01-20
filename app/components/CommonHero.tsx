import React from 'react';
import bg from '@/public/images/background-img.jpg';
import Link from 'next/link';

// Props interface for reusable hero section
interface CommonHeroProps {
  title: string;       // Main heading text
  navTitle: string;    // Navigation label (e.g. "Home")
  projectText: string; // Current page label (e.g. "Project Overview")
}

// Reusable hero component with background image and breadcrumb
const CommonHero: React.FC<CommonHeroProps> = ({ title, navTitle, projectText }) => {
  return (
    // Centering the hero section vertically and horizontally
    <div className="flex justify-center items-center">
      <div
        className="w-full h-auto py-8 px-8 md:px-20 bg-cover bg-no-repeat flex justify-start items-center text-black"
       style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="space-y-4">
          {/* Dynamic heading */}
          <h1 className="md:text-4xl text-2xl font-jost font-semibold">{title}</h1>

          {/* Breadcrumb navigation */}
          <p className="text-lg font-jost font-semibold">
            <Link href="/home" className="text-black text-opacity-90">
              {navTitle} /
            </Link>
            <span className="text-sm font-jost opacity-80"> {projectText}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Exporting the component for use in other pages
export default CommonHero;
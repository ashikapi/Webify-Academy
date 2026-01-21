'use client';

import { useEffect } from "react";
import CommonHero from "@/app/components/CommonHero";
import CommonMainContent from "@/app/components/CommonMainContent";

// Mission page component
const Mission = () => {
  useEffect(() => {
    document.title = "Mission - Webify Academy";
  }, []);

  return (
    <>
      {/* Hero section with title and breadcrumb */}
      <CommonHero
        title="Mission"
        navTitle="Home"
        projectText=" Mission"
      />

      <CommonMainContent
        text="Webify Academy is dedicated to empowering aspiring IT professionals 
        and freelancers through high-quality, accessible, and industry-focused education. 
        Our mission is to nurture innovation, creativity, and entrepreneurial thinking by 
        delivering practical, up-to-date training programs that equip learners with the 
        skills and confidence needed to succeed in the ever-evolving IT and freelancing 
        landscape."
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Empowering education and skill development"
        imagePosition="right"
        hoverEffect="rotate"
      />
    </>
  );
};

export default Mission;
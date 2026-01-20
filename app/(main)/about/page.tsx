'use client';
import { useEffect } from "react";
import CommonHero from '@/app/components/CommonHero';
import CommonMainContent from '@/app/components/CommonMainContent';
// AboutUs page component
const AboutUs = () => {
  useEffect(() => {
    document.title = "About - FG IT INSTITUTE";
  }, []);

  return (
    <>
      {/* Hero section with title and breadcrumb */}
      <CommonHero
        title="About Us"
        navTitle="Home"
        projectText=" About Us"
      />

      {/* Main content section with descriptive text */}

      <CommonMainContent
        text="Webify Academy is a modern learning platform dedicated to empowering individuals with the 
        skills required to succeed in the IT and freelancing industry. We focus on developing both 
        technical expertise and essential soft skills, along with a strong foundation in freelancing 
        practices, to help learners become confident and independent professionals. Founded on the 
        values of innovation, excellence, and continuous growth, Webify Academy is committed to shaping 
        the next generation of skilled IT professionals."
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Team collaboration in IT training session"
        imagePosition="right"
        hoverEffect="rotate"
      />

      <CommonMainContent
        text="Webify Academy is a professional learning platform committed to empowering individuals with the 
        essential skills required to thrive in today’s IT and freelancing industries. We offer hands-on training, 
        expert mentorship, and practical guidance in both technical and soft skills, ensuring learners are 
        well-prepared for real-world challenges. Built on the principles of innovation, quality education, 
        and continuous growth, Webify Academy focuses on developing future-ready IT professionals who can 
        confidently build and sustain successful freelance careers."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Professional freelancing training session"
        imagePosition="left"
        hoverEffect="glow"
      />
    </>
  );
};

// Exporting the AboutUs component for use in routing
export default AboutUs;
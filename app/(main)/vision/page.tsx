'use client';

import { useEffect } from "react";
import CommonHero from "@/app/components/CommonHero";
import CommonMainContent from "@/app/components/CommonMainContent";

// Vision page component
const Vision = () => {
  useEffect(() => {
    document.title = "Vision - Webify Academy";
  }, []);

  return (
    <>
      {/* Hero section with title and breadcrumb */}
      <CommonHero
        title="Vision"
        navTitle="Home"
        projectText=" Vision"
      />


      <CommonMainContent
        text="Webify Academy envisions becoming a leading global platform for IT education 
        and freelancing training, empowering individuals from diverse backgrounds to 
        unlock their true potential. We strive to create a future where learners thrive 
        in the digital era, build sustainable careers, and contribute meaningfully to 
        an inclusive and globally connected digital economy."
        imageUrl="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
        imageAlt="Sustainable and inclusive global digital economy"
        imagePosition="right"
        hoverEffect="rotate"
      />
    </>
  );
};

// Exporting the Vision component for use in routing
export default Vision;
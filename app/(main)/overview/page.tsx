'use client';
import CommonHero from "@/app/components/CommonHero";
import CommonMainContent from "@/app/components/CommonMainContent";
import { useEffect } from "react";

const ProjectOverview = () => {
  useEffect(() => {
    document.title = "Project Overview - Webify Academy";
  }, []);

  return (
    <>
      <CommonHero
        title="Project Overview"
        navTitle="Home"
        projectText=" Project Overview"
      />

      {/* First section - image on right */}
      <CommonMainContent
        text='Webify Academy is dedicated to delivering high-quality, affordable, 
        and industry-focused IT and digital skills training for aspiring professionals 
        and freelancers. Our mission is to empower learners with strong technical expertise, 
        practical business knowledge, and modern freelancing tools, 
        enabling them to build successful careers and compete confidently in global 
        online marketplaces.'
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
        imageAlt="Modern classroom setting"
        imagePosition="right"
      />

      {/* Second section - image on left */}
      <CommonMainContent
        text='Our curriculum is designed by industry experts with years of experience 
        in both IT and freelancing. We offer hands-on training, real-world projects, 
        and mentorship programs to ensure our students are job-ready upon completion 
        of their courses.'
        imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Hands-on coding session"
        imagePosition="left"
      />
    </>
  );
};

export default ProjectOverview;
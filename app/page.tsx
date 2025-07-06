import React from "react";
import AboutBody from "@/components/Aboutbody";
import Testimonials from "@/components/testimonials";
import ServicesBlock from '@/components/ServicesBlock';
import Trustus from "@/components/Trustus";
import CaseStudies from "@/components/CaseStudies";
import TeamSection from "@/components/TeamSection";
import ApproachSection from "@/components/ApproachSection";
import TechStackSection from "@/components/TechStackSection";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import HireSection from "@/components/HireSection";
export default function Home() {
  return (
    <div >
      <AboutBody />
      <ServicesBlock />
      <Trustus />
      <Testimonials />
      <CaseStudies />
      <TeamSection />
      <ApproachSection />
      <TechStackSection />
      <DevelopmentProcess />
      <HireSection />
    </div>
  );
}

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
    <div>
      <section id="about">
        <AboutBody />
      </section>
      <section id="services">
        <ServicesBlock />
      </section>
      <section id="about-us">
        <Trustus />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="case-studies">
        <CaseStudies />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="approach">
        <ApproachSection />
      </section>
      <section id="tech-stack">
        <TechStackSection />
      </section>
      <section id="how-it-works">
        <DevelopmentProcess />
      </section>
      <section id="hire">
        <HireSection />
      </section>
    </div>
  );
}

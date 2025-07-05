import React from "react";
import AboutBody from "@/components/Aboutbody";

import ServicesBlock from '@/components/ServicesBlock';
import Trustus from "@/components/Trustus";
export default function Home() {
  return (
    <div >
      <AboutBody />
      <ServicesBlock />
      <Trustus />
    </div>
  );
}

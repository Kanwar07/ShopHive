import React from "react";
import HeroSection from "./sections/HeroSection";
import ContactSection from "./sections/ContactSection";
import Footer from "@/components/Footer";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;

"use client"


import { useEffect } from "react";
import MainHeader from "../../components/mainHeader";
import HeroSection from "../../components/landingPage/hero_section";
import WhySection from "../../components/landingPage/why_section";
import PricingSection from "../../components/landingPage/pricing_section";
import FAQSection from "../../components/landingPage/faq_section";
import FeatureSection from "../../components/landingPage/features_section";

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/65f690df9317c5437128b427/1hp5ibqlg';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="bg-white min-h-screen">
        <MainHeader/>
        <HeroSection/>
        <FeatureSection/>
        <WhySection/>
        <PricingSection/>
        <FAQSection/>
    </main>
  );
}

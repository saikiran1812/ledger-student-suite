
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

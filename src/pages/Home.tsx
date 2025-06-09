import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ValueProposition from '../components/ValueProposition';
import TargetUsers from '../components/TargetUsers';
import QueuerSection from '../components/QueuerSection';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <ValueProposition />
      <TargetUsers />
      <QueuerSection />
      <Pricing />
      <Footer />
    </div>
  );
}
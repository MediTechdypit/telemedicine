import Brands from '@/components/Frontend/Brands';
import DoctorsList from '@/components/Frontend/DoctorsList';
import Hero from '@/components/Frontend/Hero';
import TabbedSection from '@/components/Frontend/TabbedSection';
import React from 'react'

export default function Home() {
  return (
    <section>
        <Hero /> 
        <Brands />
        <TabbedSection />
        <DoctorsList />
    </section>
  );
}

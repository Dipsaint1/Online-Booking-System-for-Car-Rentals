import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}

export default SharedLayout;
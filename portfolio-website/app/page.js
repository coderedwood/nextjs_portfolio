import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import TechnologiesSection from './components/TechnologiesSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      {/* To do 2 more sections */}
    </div>
    <Footer />
    </main>
  )
}

import Image from 'next/image'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-[#F9D19E] from-[percentage:10%] via-[#F7E6CE] via-[percentage:30%_80%] to-[#FEA932] to-[percentage:108%]">
    <Navbar />
    <div className="container mt-4 mx-auto px-12 py-4">
      <About />
    </div>
    <Footer />
    </main>
  )
}
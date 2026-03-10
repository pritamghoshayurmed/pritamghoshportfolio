import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specializations from './components/Specializations'
import Advantages from './components/Advantages'
import CtaBanner from './components/CtaBanner'
import Portfolio from './components/Portfolio'
import Marquee from './components/Marquee'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Specializations />
      <Advantages />
      <CtaBanner />
      <Portfolio />
      <Marquee />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App

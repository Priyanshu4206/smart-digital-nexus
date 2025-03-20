import Contact from '@/components/home/Contact'
import { useEffect } from 'react'
import CallToAction from '../components/home/CallToAction'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Attica Corporation - Smart Digital Solutions'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Index

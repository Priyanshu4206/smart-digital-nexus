
import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CallToAction from '../components/home/CallToAction';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Attica Corporations - Smart Digital Solutions";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Index;

import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';

const Home: React.FC = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const FqRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const hcf = document.querySelector('.hcf-profile');
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > lastScrollTop && hcf) {
        hcf.classList.add('hcf-profile-fixed');
      } else if (scrollTop < lastScrollTop && hcf) {
        hcf.classList.remove('hcf-profile-fixed');
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <HeroSection
          scrollToSection={scrollToSection}
          featuresRef={FqRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
        />
        <div className="bg-[#eff6ff] relative py-10">
          <FeaturesGrid />
        </div>
        <div className="bg-white relative py-10" ref={aboutRef}>
          <InfoSection />
        </div>
        <div className="bg-white relative py-10" ref={FqRef}>
          <HomeFAQs />
        </div>
        <div className="bg-white relative py-10" ref={contactRef}>
          <ContactForm />
        </div>
        <MainFooter />
      </div>
    </>
  );
};

export default Home;
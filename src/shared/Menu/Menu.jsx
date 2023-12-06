import React, { useState, useEffect } from 'react';
import './Menu.css';

export function Menu() {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      setMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const porfolioSection = document.getElementById('porfolio');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (isInViewport(homeSection)) {
        setActiveSection('home');
      } else if (isInViewport(aboutSection)) {
        setActiveSection('about');
      } else if (isInViewport(servicesSection)) {
        setActiveSection('services');
      } else if (isInViewport(porfolioSection)) {
        setActiveSection('porfolio');
      } else if (isInViewport(contactSection)) {
        setActiveSection('contact');
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`Cabecera ${menu ? 'isActive' : ''} ${scrolling ? 'isScrolling' : ''}`}>
        <h1 className="Cabecera-h1">
          <a href="#home" className={`Cabecera-li ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>
            Sntyart5
          </a>
        </h1>

        <button onClick={toggleMenu} className="Cabecera-button">
          <svg className="Cabecera-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>

        <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
          <ul className="Cabecera-ul">
            <li onClick={() => scrollToSection('home')} className={`Cabecera-li ${activeSection === 'home' ? 'active' : ''}`}>Home</li>
            <li onClick={() => scrollToSection('about')} className={`Cabecera-li ${activeSection === 'about' ? 'active' : ''}`}>About</li>
            <li onClick={() => scrollToSection('services')} className={`Cabecera-li ${activeSection === 'services' ? 'active' : ''}`}>Services</li>
            <li onClick={() => scrollToSection('porfolio')} className={`Cabecera-li ${activeSection === 'porfolio' ? 'active' : ''}`}>Portfolio</li>
            <li onClick={() => scrollToSection('contact')} className={`Cabecera-li ${activeSection === 'contact' ? 'active' : ''}`}>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

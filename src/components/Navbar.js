import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function NavigationBar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? 'navbar-scrolled' : 'navbar-transparent'}
    >
      <Container>
        <Navbar.Brand href="#home">
          <a class="navbar-brand" href="#">
            <img src="/assets/Mediatic IT Systems logo.png" alt="Logo" width="180"/>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="text-white mx-2">
              {t('nav.home')}
            </Nav.Link>
            <Nav.Link href="#services" className="text-white mx-2">
              {t('nav.services')}
            </Nav.Link>
            <Nav.Link href="#about" className="text-white mx-2">
              {t('nav.about')}
            </Nav.Link>
            <Nav.Link href="#portfolio" className="text-white mx-2">
              {t('nav.portfolio')}
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white mx-2">
              {t('nav.contact')}
            </Nav.Link>
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
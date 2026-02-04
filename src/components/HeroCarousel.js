import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function HeroCarousel() {
  const { t } = useTranslation();

  return (
    <div id="home" className="hero-section">
      <div className="hero-background">
        <img
          src="/assets/background.gif"
          alt="Background"
          className="background-gif"
        />
      </div>

      <Container className="carousel-content d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '100vh' }}>
        <Carousel className="hero-carousel" controls={false} indicators={false} fade interval={4000} pause={false} slide={false}>
        <Carousel.Item>
          <Container className="carousel-content">
            <div className="carousel-text">
              <h1 className="display-3 fw-bold mb-4">
                {t('hero.slide1.title')}
              </h1>
              <p className="lead mb-4">
                {t('hero.slide1.subtitle')}
              </p>
            </div>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="carousel-content">
            <div className="carousel-text">
              <h1 className="display-3 fw-bold mb-4">
                {t('hero.slide2.title')}
              </h1>
              <p className="lead mb-4">
                {t('hero.slide2.subtitle')}
              </p>
            </div>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="carousel-content">
            <div className="carousel-text">
              <h1 className="display-3 fw-bold mb-4">
                {t('hero.slide3.title')}
              </h1>
              <p className="lead mb-4">
                {t('hero.slide3.subtitle')}
              </p>
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>

      <Button
        variant="light"
        size="lg"
        className="cta-button mt-4"
      >
        {t('hero.slide1.cta')}
      </Button>
      </Container>
    </div>
  );
}

export default HeroCarousel;
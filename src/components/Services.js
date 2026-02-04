import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 21l18 0"></path>
          <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
          <path d="M5 21l0 -10.15"></path>
          <path d="M19 21l0 -10.15"></path>
          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
        </svg>
      ),
      titleKey: 'services.marketplaces.title',
      descKey: 'services.marketplaces.description'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 17.6l-2 -1.1v-2.5"></path>
          <path d="M4 10v-2.5l2 -1.1"></path>
          <path d="M10 4.1l2 -1.1l2 1.1"></path>
          <path d="M18 6.4l2 1.1v2.5"></path>
          <path d="M20 14v2.5l-2 1.12"></path>
          <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
          <path d="M12 12l2 -1.1"></path>
          <path d="M18 8.6l2 -1.1"></path>
          <path d="M12 12l0 2.5"></path>
          <path d="M12 18.5l0 2.5"></path>
          <path d="M12 12l-2 -1.12"></path>
          <path d="M6 8.6l-2 -1.1"></path>
        </svg>
      ),
      titleKey: 'services.odoo.title',
      descKey: 'services.odoo.description'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"></path>
        </svg>
      ),
      titleKey: 'services.cloud.title',
      descKey: 'services.cloud.description'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 8l-4 4l4 4"></path>
          <path d="M17 8l4 4l-4 4"></path>
          <path d="M14 4l-4 16"></path>
        </svg>
      ),
      titleKey: 'services.software.title',
      descKey: 'services.software.description'
    }
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5 section-header">
          <p className="section-subtitle mb-2">
            {t('services.subtitle')}
          </p>
          <h2 className="section-title">
            {t('services.title')}
          </h2>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6}>
              <div className="service-card-new">
                <div className="service-icon-new">
                  {service.icon}
                </div>
                <div className="service-content-new">
                  <h3 className="service-title-new">
                    {t(service.titleKey)}
                  </h3>
                  <p className="service-description-new">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getCurrentLanguage = () => {
    return i18n.language === 'es' ? '🇪🇸 Español' : '🇬🇧 English';
  };

  return (
    <NavDropdown
      title={
        <span className="text-white">
          <i className="bi bi-globe me-1"></i>
          {getCurrentLanguage()}
        </span>
      }
      id="language-dropdown"
      className="ms-2"
    >
      <NavDropdown.Item
        onClick={() => changeLanguage('en')}
        active={i18n.language === 'en'}
      >
        🇬🇧 English
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => changeLanguage('es')}
        active={i18n.language === 'es'}
      >
        🇪🇸 Español
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default LanguageSwitcher;
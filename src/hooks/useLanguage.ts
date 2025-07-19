
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const langCode = pathSegments[1];
    
    if (langCode === 'id' || langCode === 'en') {
      if (i18n.language !== langCode) {
        i18n.changeLanguage(langCode);
      }
    } else {
      // Default to English if no language code in URL
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
    }
  }, [location.pathname, i18n]);

  return { language: i18n.language };
};

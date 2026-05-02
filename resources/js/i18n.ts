import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// This is a foundational configuration for i18next. Let's add standard translations here.
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                Accueil: 'Home',
                'À propos': 'About me',
                Initiatives: 'Initiatives',
                Contact: 'Contact',
                'Download CV': 'Download CV',
            },
        },
        fr: {
            translation: {
                Accueil: 'Accueil',
                'À propos': 'À propos',
                Initiatives: 'Initiatives',
                Contact: 'Contact',
                'Download CV': 'Télécharger le CV',
            },
        },
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // React already safes from xss
    },
});

export default i18n;

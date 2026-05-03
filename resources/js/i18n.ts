import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// This is a foundational configuration for i18next. Let's add standard translations here.
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                Accueil: 'Home',
                'Contact Me': 'Contact Me',
                'Get in touch': 'Get in touch',
                'Your message has been sent successfully!':
                    'Your message has been sent successfully!',
                'All rights reserved.': 'All rights reserved.',
                'Designed & Engineered with': 'Designed & Engineered with',
                'in Cameroon': 'in Cameroon',
                'Download CV': 'Download CV',
                'The Person You Need': 'The Person You Need',
                'Transforming Complex Ideas': 'Transforming Complex Ideas',
                'Behind every complex idea is a real human need. I specialize in breaking down intricate problems into clear, meaningful solutions that prioritize usability and impact. By combining design thinking with engineering expertise, I create products that are genuinely valuable to the people they serve.':
                    'Behind every complex idea is a real human need. I specialize in breaking down intricate problems into clear, meaningful solutions that prioritize usability and impact. By combining design thinking with engineering expertise, I create products that are genuinely valuable to the people they serve.',
                'Read more': 'Read more',
            },
        },
        fr: {
            translation: {
                Accueil: 'Accueil',
                'À propos': 'À propos',
                Initiatives: 'Initiatives',
                Contact: 'Contact',
                'Contact Me': 'Me contacter',
                'Get in touch': 'Contactez-moi',
                'Your message has been sent successfully!':
                    'Votre message a été envoyé avec succès !',
                'All rights reserved.': 'Tous droits réservés.',
                'Designed & Engineered with': 'Conçu & Développé avec',
                'in Cameroon': 'au Cameroun',
                'Download CV': 'Télécharger CV',
                'The Person You Need': 'La personne dont vous avez besoin',
                'Transforming Complex Ideas': 'Transformer les idées complexes',
                'Behind every complex idea is a real human need. I specialize in breaking down intricate problems into clear, meaningful solutions that prioritize usability and impact. By combining design thinking with engineering expertise, I create products that are genuinely valuable to the people they serve.':
                    "Derrière chaque idée complexe se cache un besoin humain réel. Je me spécialise dans la décomposition de problèmes complexes en solutions claires et significatives qui privilégient la convivialité et l'impact. En combinant la pensée design avec une expertise en ingénierie, je crée des produits qui sont réellement précieux pour les personnes qu'ils servent.",
                'Read more': 'En savoir plus',
            },
        },
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // React already safes from xss
    },
});

export default i18n;

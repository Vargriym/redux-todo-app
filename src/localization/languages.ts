import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enContent from './en/en.json';
import arContent from './ar/ar.json';
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: enContent,
            },
            ar: {
                translation: arContent,
            },
        },
        fallbackLng: 'en', 
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie']       
        }
    });

export default i18n;

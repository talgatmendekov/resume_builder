import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from './language/ru.json'
import en from './language/en.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: ru
            },
      en: {
                translation: en
            }
        },

        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import  Backend, { type HttpBackendOptions } from 'i18next-http-backend';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//   en: {
//     translation: enLang,
//   },
//   fr: {
//     translation: {
   
//     }
//   }
// };

const backendOptions: HttpBackendOptions = {
    queryStringParams: {
  version: '1.0.0'
}
}

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
  
    fallbackLng: "en",
    ns:[],
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend:backendOptions,
  });

  export default i18n;
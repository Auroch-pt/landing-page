import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          welcome: {
            title: "Welcome to FREEDEV",
            description: "Freedev is the future of freelancing",
          },
          header: {
            nav_option1: "Home",
            nav_option2: "FAQ's",
            nav_option3: "About Us",
            enroll: "Get started",
          },
          banner: {
            title: "You decide when and where to work",
            description:
              "Freedev is a platform where you can build projects, either by solving tasks or by creating them.",
            card1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            card2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            card3:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
          CTABanner: {
            title: "Let's start building now",
            subtitle: "Connect with your wallet and start solving issues.",
          },
          footer: {
            info: "© 2022 Freedev. All rights reserved.",
          },
          error: {
            message: "Default Error",
          },
        },
      },
      pt: {
        translation: {
          welcome: {
            title: "Bem-vindo ao FREEDEV",
            description: "Freedev é o futuro do freelancing",
          },
          header: {
            nav_option1: "Home",
            nav_option2: "FAQ's",
            nav_option3: "Sobre Nós",
            enroll: "Começar",
          },
          banner: {
            title: "Tu decides quando e onde trabalhar",
            description:
              "Freedev é uma plataforma onde podes construir projetos, a resolver tarefas ou a criá-las",
            card1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            card2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            card3:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
          CTABanner: {
            title: "Vamos começar a desenvolver projectos",
            subtitle: "Conecta-te com a tua wallet e começa agora a desenvolver projetos.",
          },
          footer: {
            info: "© 2022 Freedev. Todos os direitos reservados.",
          },
          error: {
            message: "Erro teste",
          },
        },
      },
    },
  });

export default i18n;

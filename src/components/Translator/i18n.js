import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ENGLISH_TRANSLATION } from "../../resources/translations/english";
import { PORTUGUESE_TRANSLATION } from "../../resources/translations/portuguese";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
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
            subtitle: "Connect with your wallet and start solving issues",
          },
          faqs: {
            question1: "Lorem ipsum dolor asset?",
            answer1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            question2: "Lorem ipsum dolor asset?",
            answer2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            question3: "Lorem ipsum dolor asset?",
            answer3:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            question4: "Lorem ipsum dolor asset?",
            answer4:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
          about: {
            title: "Abous us",
            descriptionParagraph1:
              "We are a group of software developers with the ambitious and will of building projects that have a positive impact in the world.",
            descriptionParagraph2:
              "Freedev is a challenge, a dream and a revolution but we are also determined and crazy enough to make it happen.",
            valuesTitle: "Our values",
            value1Title: "Trying, exploring and sharing",
            value1Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            value2Title: "Together, we go further",
            value2Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            value3Title: "Work hard, laugh harder",
            value3Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            value4Title: "Continuous improvement is the key to success",
            value4Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          },

          footer: {
            info: "All rights reserved.",
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
            title: "Vamos começar agora a construir projectos",
            subtitle: "Conecta-te com a tua wallet e começa a resolver tarefas.",
          },
          faqs: {
            question1: "Lorem ipsum dolor asset?",
            answer1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            question2: "Lorem ipsum dolor asset?",
            answer2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            question3: "Lorem ipsum dolor asset?",
            answer3:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            question4: "Lorem ipsum dolor asset?",
            answer4:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
          about: {
            title: "Sobre nós",
            descriptionParagraph1:
              "Somos um grupo de programadores com a ambição e vontade de construir projetos que têm um impacto positivo no mundo.",
            descriptionParagraph2:
              "Freedev é um desafio, um sonho e uma revolução, mas nós também somos determinados e malucos o suficiente para o concretizar.",
            valuesTitle: "Os nossos valores",
            value1Title: "Tentar, explorar e partilhar",
            value1Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            value2Title: "Juntos, vamos mais longe",
            value2Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            value3Title: "Trabalhar muito, rir muito mais",
            value3Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            value4Title: "Consistência é a chave do sucesso",
            value4Description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          },
          footer: {
            info: "Todos os direitos reservados.",
          },
          error: {
            message: "Erro teste",
          },
        },

      },
    },
  });

export default i18n;

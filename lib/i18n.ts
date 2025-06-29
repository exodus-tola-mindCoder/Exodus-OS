import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Exodus OS",
      "loading": "Booting system...",
      "desktop": "Desktop",
      "about": "About Exodus",
      "terminal": "Terminal",
      "documents": "Documents",
      "projects": "Projects",
      "close": "Close",
      "minimize": "Minimize",
      "maximize": "Maximize"
    }
  },
  am: {
    translation: {
      "welcome": "እንኳን ወደ ኤክሶዱስ ኦኤስ በደህና መጡ",
      "loading": "ሲስተም እየተጫነ ነው...",
      "desktop": "ዴስክቶፕ",
      "about": "ስለ ኤክሶዱስ",
      "terminal": "ተርሚናል",
      "documents": "ሰነዶች",
      "projects": "ፕሮጀክቶች",
      "close": "ዝጋ",
      "minimize": "አሳንስ",
      "maximize": "አበዛ"
    }
  },
  om: {
    translation: {
      "welcome": "Baga nagaan gara Exodus OS dhuftani",
      "loading": "Sirni ykn system fe'amaa jira...",
      "desktop": "Desktop",
      "about": "Waa'ee Exodus",
      "terminal": "Terminal",
      "documents": "Galmee",
      "projects": "Pirojektii",
      "close": "Cufi",
      "minimize": "Xiqqeessi",
      "maximize": "Guddisii"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
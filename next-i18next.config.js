/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeDetection: false
  }
  // additional configuration options can be set here like locale path
};

module.exports = nextI18NextConfig;

const path = require("path");
/** @type {import('next-i18next').UserConfig} */

const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeDetection: false
  }
};

module.exports = nextI18NextConfig;

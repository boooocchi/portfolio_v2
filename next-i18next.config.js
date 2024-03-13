const path = require("path");
/** @type {import('next-i18next').UserConfig} */

const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localePath: path.resolve("./public/locales"),
    localeDetection: false
  }
};

module.exports = nextI18NextConfig;

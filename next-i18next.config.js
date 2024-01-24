/** @type {import('next-i18next').UserConfig} */
const path = require("path");

const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localePath: path.resolve("./public/locales")
  }
};

module.exports = nextI18NextConfig;

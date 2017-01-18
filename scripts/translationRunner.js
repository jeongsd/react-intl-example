const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: './src/locales/extractedMessages',
  translationsDirectory: './src/locales/lang/',
  whitelistsDirectory: './src/locales/whitelists/',
  languages: ['ko'],
  singleMessagesFile: true,
});

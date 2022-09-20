import { createContext } from 'react';

import { INITIAL_LANGUAGE } from '../utils/constants';

export const LanguageContext = createContext({
  language: INITIAL_LANGUAGE,
  setLanguage: (arg) => arg,
});

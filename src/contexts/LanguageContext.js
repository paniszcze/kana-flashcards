import React from 'react';

import { INITIAL_LANGUAGE } from '../utils/constants';

export const LanguageContext = React.createContext({
    language: INITIAL_LANGUAGE,
    setLanguage: () => {},
});

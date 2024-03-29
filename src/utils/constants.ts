// INITIAL CONFIGURATION
export const INITIAL_LANGUAGE = 'EN';
export const INITIAL_SETTINGS = {
  hiragana: true,
  katakana: true,
  diacritics: false,
  digraphs: false,
  wi_we: false,
  extended: false,
  limit: 50,
};

// VALIDATION ERRORS
export const RESET_VALIDATION_ERRORS = {
  syllabary: false,
  extension: false,
  integer: false,
  range: false,
};

// FLASHCARD LIMITS
export const LIMITS = {
  lower: 1,
  upper: 200,
};

// SVG COUNTER
export const STROKE = 7;
export const RADIUS = 50 - STROKE / 2;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
export const COLORS = ['#c23866', '#fed766', '#8fb339'];

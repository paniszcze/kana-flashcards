import { createContext } from 'react';

export const ScoreContext = createContext({
  score: [0, 0, 0],
  setScore: (arg) => arg,
});

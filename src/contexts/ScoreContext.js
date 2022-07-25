import React from 'react';

export const ScoreContext = React.createContext({
    score: [0, 0, 0],
    setScore: () => {},
});

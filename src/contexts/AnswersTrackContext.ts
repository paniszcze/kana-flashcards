import React from 'react';

export const AnswersTrackContext = React.createContext({
    answerTrack: {},
    setAnswerTrack: (arg) => arg,
});

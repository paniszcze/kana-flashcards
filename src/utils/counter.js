import { CIRCUMFERENCE } from '../utils/constants';

export const getDashoffset = (array, start, limit) => {
    let sum = array.slice(start).reduce((a, b) => a + b, 0);
    return CIRCUMFERENCE - Math.floor((sum / limit) * CIRCUMFERENCE);
};

import * as Hiragana from '../data/hiragana';
import * as Katakana from '../data/katakana';

interface Record {
  id: string;
  kana: string;
  romaji: string;
}

const generateDict = (settings) => {
  let newDict: Array<Record> = [];
  if (settings.hiragana) {
    newDict.push(...Hiragana.basic);
    if (settings.diacritics) {
      newDict.push(...Hiragana.diacritics);
    }
    if (settings.digraphs) {
      newDict.push(...Hiragana.digraphs);
    }
    if (settings.digraphs && settings.diacritics) {
      newDict.push(...Hiragana.diacritic_digraphs);
    }
    if (settings.wi_we) {
      newDict.push(...Hiragana.wi_we);
    }
  }
  if (settings.katakana) {
    newDict.push(...Katakana.basic);
    if (settings.diacritics) {
      newDict.push(...Katakana.diacritics);
    }
    if (settings.digraphs) {
      newDict.push(...Katakana.digraphs);
    }
    if (settings.digraphs && settings.diacritics) {
      newDict.push(...Katakana.diacritic_digraphs);
    }
    if (settings.wi_we) {
      newDict.push(...Katakana.wi_we);
    }
    if (settings.extended) {
      newDict.push(...Katakana.extended);
    }
  }
  return newDict;
};

const mapToDeck = (dict) =>
  dict.map((item) => {
    return { front: item.kana, back: item.romaji };
  });

export const generateDeck = (settings) => mapToDeck(generateDict(settings));

export const chooseRandomCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
};

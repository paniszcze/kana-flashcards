export const languages = [
  {
    id: 'EN',
    language: 'English',
  },
  {
    id: 'PL',
    language: 'Polski',
  },
];

export const localisation = {
  EN: {
    title: 'Kana Flashcards',
    subtitle: 'Learn Japanese kana with customisable flashcard deck!',
    settings: 'Settings',
    info: 'Info',
    results: 'Results',
    negative: 'Nope',
    neutral: 'Kinda',
    positive: 'Yep',
    save: 'Save',
    restart: 'Restart',
    cancel: 'Cancel',
    close: 'Close',
    syllabary: 'Choose syllabary sets to practice:',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    include: 'Include:',
    diacritics: `Diacritics (<i>dakuten</i> and <i>handakuten</i>)`,
    digraphs: `Digraphs (<i>yō-on</i>)`,
    wi_we: `<span className="japanese">ゐ/ヰ</span> (<i>wi</i>) and 
      <span className="japanese">ゑ/ヱ</span> (<i>we</i>)`,
    extension: 'Extended katakana (foreign sounds representation)',
    limit: 'Number of flashcards in deck:',
    error_syllabary: 'At least one kana has to be set!',
    error_extension: 'Extension requires katakana, diacritics and digraphs!',
    error_integer: 'Flashcard number has to be an integer!',
    error_range: 'Flashcard number must fall within the range of',
    details: 'Details',
    infoText: `<p>Welcome to <strong>Kana Flashcards</strong> – a simple web app for
      learning Japanese kana readings with customisable flashcard deck!</p>
      <p>Go to <strong>Settings</strong> to customise your deck and start
      learning!</p>`,
    built: 'built by ',
  },
  PL: {
    title: 'Fiszki z kaną',
    subtitle: 'Dostosuj swoją talię fiszek do nauki japońskiej kany!',
    settings: 'Ustawienia',
    info: 'Info',
    results: 'Wyniki',
    negative: 'Nie znam',
    neutral: 'Prawie',
    positive: 'Znam',
    save: 'Zapisz',
    restart: 'Wyzeruj licznik',
    cancel: 'Anuluj',
    close: 'Zamknij',
    syllabary: 'Wybierz sylabariusze do nauki:',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    include: 'Uwzględnij:',
    diacritics: `Diakryty (<i>dakuten</i> i <i>handakuten</i>)`,
    digraphs: `Dwuznaki (<i>yō-on</i>)`,
    wi_we: `<span className="japanese">ゐ/ヰ</span> (<i>wi</i>) i 
      <span className="japanese">ゑ/ヱ</span> (<i>we</i>)`,
    extension: 'Rozszerzoną katakanę (fonemy obcojęzyczne)',
    limit: 'Liczba fiszek w talii:',
    error_syllabary: 'Wybierz przynajmniej jedną kanę!',
    error_extension: 'Rozszerzenie wymaga katakany, diakrytów i dwuznaków!',
    error_integer: 'Ilość fiszek musi być liczbą całkowitą!',
    error_range: 'Liczba fiszek musi być z zakresu',
    details: 'Szczegóły',
    infoText: `<p>Witaj w <strong>Fiszkach z kaną</strong> – prostej aplikacji internetowej
      do nauki japońskiej kany z pomocą konfigurowalnej talii fiszek!</p>
      <p>Przejdź do <strong>Ustawień</strong>, aby dostosować swoją talię
      i rozpocząć naukę!</p>`,
    built: 'zbudował ',
  },
};

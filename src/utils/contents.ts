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

export const contents = {
    // HEADER
    title: {
        EN: 'Kana Flashcards',
        PL: 'Fiszki z kaną',
    },
    subtitle: {
        EN: 'Learn Japanese kana with customisable flashcard deck!',
        PL: 'Dostosuj swoją talię fiszek do nauki japońskiej kany!',
    },
    // SECTIONS
    settings: {
        EN: 'Settings',
        PL: 'Ustawienia',
    },
    info: {
        EN: 'Info',
        PL: 'Info',
    },
    results: {
        EN: 'Results',
        PL: 'Wyniki',
    },
    // CONTROLS
    negative: {
        EN: 'Nope',
        PL: 'Nie znam',
    },
    neutral: {
        EN: 'Kinda',
        PL: 'Prawie',
    },
    positive: {
        EN: 'Yep',
        PL: 'Znam',
    },
    save: {
        EN: 'Save',
        PL: 'Zapisz',
    },
    restart: {
        EN: 'Restart',
        PL: 'Wyzeruj licznik',
    },
    cancel: {
        EN: 'Cancel',
        PL: 'Anuluj',
    },
    close: {
        EN: 'Close',
        PL: 'Zamknij',
    },
    // SETTINGS
    syllabary: {
        EN: 'Choose syllabary sets to practice:',
        PL: 'Wybierz sylabariusze do nauki:',
    },
    hiragana: {
        EN: 'Hiragana',
        PL: 'Hiragana',
    },
    katakana: {
        EN: 'Katakana',
        PL: 'Katakana',
    },
    include: {
        EN: 'Include:',
        PL: 'Uwzględnij:',
    },
    diacritics: {
        EN: `Diacritics (<i>dakuten</i> and <i>handakuten</i>)`,
        PL: `Diakryty (<i>dakuten</i> i <i>handakuten</i>)`,
    },
    digraphs: {
        EN: `Digraphs (<i>yō-on</i>)`,
        PL: `Dwuznaki (<i>yō-on</i>)`,
    },
    wi_we: {
        EN: `<span className="japanese">ゐ/ヰ</span> (<i>wi</i>) and 
        <span className="japanese">ゑ/ヱ</span> (<i>we</i>)`,
        PL: `<span className="japanese">ゐ/ヰ</span> (<i>wi</i>) i 
        <span className="japanese">ゑ/ヱ</span> (<i>we</i>)`,
    },
    extension: {
        EN: 'Extended katakana (foreign sounds representation)',
        PL: 'Rozszerzoną katakanę (fonemy obcojęzyczne)',
    },
    limit: {
        EN: 'Number of flashcards in deck:',
        PL: 'Liczba fiszek w talii:',
    },
    //RESULTS
    details: {
        EN: 'Details',
        PL: 'Szczegóły',
    },
    // INFO
    infoText: {
        EN: `<p>Welcome to <strong>Kana Flashcards</strong> – a simple web app for
    learning Japanese kana readings with customisable flashcard deck!</p>
    <p>Go to <strong>Settings</strong> to customise your deck and start
    learning!</p>`,
        PL: `<p>Witaj w <strong>Fiszkach z kaną</strong> – prostej aplikacji internetowej
    do nauki japońskiej kany z pomocą konfigurowalnej talii fiszek!</p>
    <p>Przejdź do <strong>Ustawień</strong>, aby dostosować swoją talię
    i rozpocząć naukę!</p>`,
    },
    // FOOTER
    built: {
        EN: 'built by ',
        PL: 'zbudował ',
    },
};

export const errors = {
    syllabary: {
        EN: 'At least one kana has to be set!',
        PL: 'Wybierz przynajmniej jedną kanę!',
    },
    extension: {
        EN: 'Extension requires katakana, diacritics and digraphs!',
        PL: 'Rozszerzenie wymaga katakany, diakrytów i dwuznaków!',
    },
    integer: {
        EN: 'Flashcard number has to be an integer!',
        PL: 'Ilość fiszek musi być liczbą całkowitą!',
    },
    range: {
        EN: 'Flashcard number must fall within the range of',
        PL: 'Liczba fiszek musi być z zakresu',
    },
};

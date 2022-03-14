# Kana Flashcards

Learn Japanese kana with customisable flashcard deck.

## About

Single Page Application built with React.

**_Please, bear in mind that this is an ongoing project. The application is not yet fully developped and any functionality may be subject to change._**

### TODOs

#### Rework:
- centralise application state (Redux / React hooks) to avoid intensive prop drilling
- rewrite logic of handling buttons in Settings or refactor into smaller functions
- display answer counts in Results modal outside the colored bars if they don't fit in
- move constants into separate file
- make svg counter scalable (refactor into function taking width as parameter)

#### Bugs:
- card change when saving Settings should happen once the dictionary has been updated
- hide language toggle when clicking outside dropdown div

#### New features:
- add entries for katakana (phonetic representations of foreign sounds)
- create a queue of flashcards on each run (array of indexes) and add logic to minimise card repetition
- track the answers to show the least known kana in Results
- write down general instructions in Info
- add Polish language support
- add keyboard navigation

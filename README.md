# Kana Flashcards

Learn Japanese kana with customisable flashcard deck.

## About

Single Page Application built with React.

### TODOs

#### Rework:
- centralise application state (Redux / React hooks) to avoid intensive prop drilling
- rewrite logic of handling buttons in Settings or refactor into smaller functions
- display answer counts in Results modal outside the colored bars if they don't fit in

#### Bugs:
- card change when saving Settings should happen once the dictionary has been updated
- hide language toggle when clicking outside dropdown div

#### New features:
- create a queue of flashcards on each run and add logic to minimise card repetition
- track the answers to show the least known kana in Results
- write down general instructions in Info
- add keyboard navigation

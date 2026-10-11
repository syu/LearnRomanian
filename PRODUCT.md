# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One person: a Russian speaker living in Brașov, Romania, taking a Romanian language course. They study vocabulary from their lessons and homework, mostly on a laptop/desktop with mouse and keyboard.

## Product Purpose

Învățăm cuvinte is a personal vocabulary trainer for Romanian. The user picks topics and drills words with translation, listening, picture and matching exercises, hearing every Romanian word pronounced. Success is steady recall of the words from the course, with learned words retired from practice.

## Positioning

Built around the user's own course: every word, example sentence and topic comes from their lessons and homework, with Russian translations, Russian-letter transcriptions and notes on usage, so drills match exactly what the class is teaching.

## Operating Context

- Short, frequent sessions (5–15 minutes, often daily), started mostly with the Микс mode.
- New words arrive in batches from lessons and homework; new words go to the "Altele" topic until a theme has enough words for its own topic.
- Opened as a local file (`index.html`) or via a local server; works offline, with pronunciation from saved recordings in `audio/`.

## Capabilities and Constraints

- Single static page: `index.html` (UI, CSS, JS inline), word data in `words.js`, recordings in `audio/` with `audio/index.js`, generator `tools/make-audio.mjs`. No build step, no framework, no network dependency.
- Interface language: Russian. Content: Romanian words with Russian translations.
- Modes: Микс (default; all question types plus pairs rounds), cards, RO→RU, RU→RO, listening, picture modes (emoji picture plus translation), pairs (word–translation, word–picture).
- Words can be marked learned and are then excluded from exercises. Statistics, settings and learned marks live in the browser's localStorage.
- Keyboard shortcuts: 1–6 answer, Enter next / start Микс, R replay sound, Esc menu.

## Brand Commitments

- Emoji pictures are the word illustrations and must stay (as hints next to the translation).
- The interface must not be busy: decoration or animation must never distract from the words.

## Evidence on Hand

- `words.js`: about 180 words in 7 topics (De bază, Întrebări, Prepoziții, Zilele săptămânii, Vremea, La curs, Altele) with translations, transcriptions, notes and example sentences.
- `audio/`: about 300 saved pronunciation recordings.

## Product Principles

1. The word is the hero: Romanian word, its sound and its meaning come first on every screen.
2. One click to start practising; a short session should feel complete and rewarding.
3. Stay faithful to the course: content comes from the user's lessons, corrected and explained, never generic.
4. Quiet by default, warm in feedback: encouragement for progress without distraction.

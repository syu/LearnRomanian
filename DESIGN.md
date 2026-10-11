---
name: Învățăm cuvinte
description: A Romanian school primer in deep teal and crayon pastels, where every word gets its own page and the teacher's stamp marks the answer.
colors:
  rail: "#0e4f55"
  rail-deep: "#0a3e43"
  rail-muted: "rgba(255,255,255,.74)"
  rail-line: "rgba(255,255,255,.14)"
  teal: "#155e63"
  teal-soft: "#dcf0eb"
  teal-ring: "#5fb3ad"
  brick: "#c0412a"
  brick-soft: "#fbe7e1"
  lavender: "#cbb8f0"
  apricot: "#ffc8a2"
  pistachio: "#cfe8a9"
  lemon: "#fff1a8"
  lime: "#e4f09b"
  mint: "#bfe6dc"
  page: "#f4fbf9"
  paper: "#ffffff"
  ink: "#14262b"
  muted: "#52676b"
  line: "#d8e9e5"
  line-strong: "#b9d5cf"
typography:
  display:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "112px"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-.03em"
  grade:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-.03em"
  headline:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.01em"
  title:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.2
  option:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: ".08em"
rounded:
  sm: "10px"
  control: "12px"
  md: "16px"
  hero: "20px"
  lg: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "26px"
  xl: "36px"
components:
  button-primary:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.rail-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "11px 20px"
  button-start:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.hero}"
    padding: "20px 26px"
  button-start-hover:
    backgroundColor: "{colors.rail-deep}"
  chip-mode:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.option}"
    rounded: "{rounded.md}"
    padding: "14px 70px 14px 16px"
    height: "76px"
  option-right:
    backgroundColor: "{colors.teal-soft}"
  option-wrong:
    backgroundColor: "{colors.brick-soft}"
  letter-tile:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.rail}"
    rounded: "{rounded.lg}"
    size: "196px"
  stamp:
    textColor: "{colors.teal}"
    rounded: "{rounded.full}"
    size: "64px"
  stamp-bad:
    textColor: "{colors.brick}"
  word-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  rail:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.paper}"
    width: "300px"
  topic-row-on:
    backgroundColor: "rgba(255,255,255,.13)"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "9px 10px"
---

# Design System: Învățăm cuvinte

## Overview

**Creative North Star: "The Abecedar Page"**

Each Romanian word gets a page of its own, set like a school primer (abecedar). A crayon letter tile holds the word's initial ("Pp"), the word sits beside it at primer scale in heavy rounded letterforms, the emoji picture stands on the right, and a teacher's stamp marks every answer. A deep sea-teal rail runs down the left like the spine of a school book. It holds the topics and the session tally, so the page itself stays quiet.

The world is flat and calm. The page is mint-white, the colour comes from flat crayon fills, and surfaces only lift when the pointer is over them. The palette is teal with green and yellow pastels. The user chose to leave out pink. Brick red belongs to the teacher's pen and is used only for mistakes. Density is low: one word, one question and one set of options per view, and the frame never moves between questions.

It rejects the category default: a grey flashcard centred on a blank screen with a green progress bar.

**Key Characteristics:**
- A deep teal rail (300px) beside a mint-white page, never the other way round.
- One Romanian word per page, set in Rubik 800 at primer scale.
- Crayon pastel fills that carry meaning (topic, question type, mode group). They are never decoration.
- A rotated double-ring teacher's stamp: teal for correct, brick for wrong, and a Romanian calificativ (FB / B / S / I) on results.
- Flat at rest. A soft teal lift appears only on hover and selection.

## Colors

The palette is deep teal and crayon pastels on a mint-white page, with brick red kept for the teacher's pen.

### Primary
- **Sea-Teal Rail** (rail): the left rail background, the primary button, the Начать · Микс start button and the letters on crayon tiles. It is the single dark field on every screen.
- **Rail Deep** (rail-deep): hover state for teal buttons, the progress track and tally wells inside the rail.
- **Stamp Teal** (teal): the correct stamp, the border of a correct option, speaker icons and example-sentence links.
- **Teal Wash** (teal-soft): fill for a correct option, a selected or finished pair item and the speaker button.
- **Focus Teal** (teal-ring): the 3px focus outline on the page. Inside the rail the focus outline is Lemon.

### Secondary
- **Teacher's Brick** (brick): the wrong stamp, the border of a wrong option, the "Неверно" verdict and the S / I grade stamps.
- **Brick Wash** (brick-soft): fill for a wrong option or a mismatched pair item.

### Tertiary (crayons)
- **Lavender**, **Apricot**, **Pistachio**, **Lemon**, **Mint**, **Lime**: flat crayon fills. Topics take them in that rotation, and the colour fills the topic's letter tile and card top. Question types are colour-coded: the RO word tile uses its topic crayon, RU→RO is Apricot, the picture tile is Pistachio and the listening tile is Lemon. Each mode group takes one crayon (study Lavender, translation Apricot, picture Pistachio, pairs Lemon). Inside the rail, Lemon also fills checked topic boxes, the progress bar and the active rail button. Pistachio and Apricot colour the correct and wrong counts in the tally.

### Neutral
- **Mint-White Page** (page): the main page background and the inner ring of the large grade stamp.
- **Paper** (paper): options, the answer panel, word cards, mistake rows and secondary buttons.
- **Primer Ink** (ink): all body text and the 4px top rule of the plate.
- **Slate Muted** (muted): secondary text, transcriptions, prompts and hints.
- **Hairline** (line): 1–2px borders on options, cards and panels, and the bottom rule of the plate.
- **Strong Hairline** (line-strong): borders on secondary buttons and selects.
- **Rail Muted / Rail Line**: secondary text and button outlines on the teal rail.

### Named Rules
**The Crayon Is a Code Rule.** A crayon fill always tells you something: which topic a word belongs to, which kind of question this is, or which mode group a chip is in. A new surface may not use a crayon only to look cheerful.

**The Teacher's Pen Rule.** Brick appears only where the teacher would mark in red: a wrong answer, a wrong stamp or a failing grade. It is never used for a call to action, a heading or decoration.

**The No Pink Rule.** The pastel family is green and yellow (pistachio, lime, lemon, mint) with lavender and apricot. Rose and raspberry are out by the user's choice.

## Typography

**Display Font:** Rubik (with system-ui, sans-serif), self-hosted, 400–800
**Body Font:** Golos Text (with system-ui, sans-serif), self-hosted, 400–700
**Emoji:** Segoe UI Emoji / Apple Color Emoji / Noto Color Emoji

**Character:** Rubik's soft, heavy primer letterforms carry the Romanian words, headings and numbers. Golos Text is a calm Cyrillic-first grotesque for the Russian interface. Both fonts are subset for latin, latin-ext (ă â î ș ț) and cyrillic.

### Hierarchy
- **Display** (Rubik 800, 1.02, -.03em): the Romanian word on the plate. Its size steps down with length (112 / 92 / 74 / 60 / 46px), so long phrases still fit. A Russian prompt word uses Rubik 700 (80 / 64 / 50 / 40px). On phones every step scales by 0.62.
- **Grade** (Rubik 800, 64px, 1): the calificativ name on results ("Bine"). The rail session count uses the same voice at 54px.
- **Headline** (Rubik 700, 30px, 1.15): the page heading on home. The meaning line under the word uses Rubik 500 at 30px.
- **Title** (Rubik 700, 22–25px): the word on a card, the start button label, the session mode and section headings (20px).
- **Option** (Golos Text 500, 21px, 1.25): answer options. Romanian options switch to Rubik 600.
- **Body** (Golos Text 400, 16px, 1.5): interface text. Meta and transcriptions are 17–18px in Muted, and hints are 13–14px.
- **Label** (Golos Text 600, 12px, .08em, uppercase): names a group of controls only (the topic list "Темы" and the mode groups on home).

### Named Rules
**The Primer Word Rule.** On any page that shows a word, the Romanian word is the largest text on screen, set in Rubik 800. Nothing else uses Display.

**The Two Voices Rule.** Romanian goes in Rubik and Russian interface text goes in Golos Text. A Romanian word inside Russian prose (answer panel, mistake rows) switches to Rubik 700.

## Layout

The desktop shell is a two-column grid: a fixed 300px teal rail (sticky, full height) and the page (padding 40px top, clamp(24px, 4.5vw, 72px) at the sides, max 1240px). The page is built from a **plate**: a three-column band (tile 196px | word | emoji), ruled with a 4px ink line above and a 1px hairline below, 36px of padding inside and 44px gaps. Question pages reuse it at 176px tile, 40px gap and min-height 248px. Below the plate come the options: two columns, or three for six options, with 12px gaps. The answer panel below has a reserved min-height of 132px. Home stacks plate → start button (max 640px) → four mode-group columns → settings.

Spacing rhythm: 8 / 12 / 18 / 26 / 36px. Gaps between controls are 8–12px, gaps between blocks are 26–36px.

Responsive: at 1080px or narrower, mode groups go to two columns, the home tile shrinks to 150px and the big emoji hides. At 820px or narrower, the rail becomes a top band, topics wrap as outlined pills, the session rail becomes a compact count + tally row, and home moves the start button above the plate. The plate tile drops to 96px, the word scales by 0.62, options go to one column (min-height 54px), and the emoji moves into the answer panel.

**The Still Frame Rule.** Every question type shares one plate, one scale and one baseline. Only the tile and the text change. Reserve heights (the plate's min-height and the answer panel's) so the frame does not shift between questions or when the answer appears.

## Elevation & Depth

Flat by default. Depth comes from tone (the teal rail against the mint page, paper surfaces on mint) and from hairlines. One shadow exists, and only for state.

### Shadow Vocabulary
- **Teal Lift** (`box-shadow: 0 6px 18px -8px rgba(14, 79, 85, .35)` with `translateY(-2px)` or `-3px`): appears on hover for options, mode chips, the start button, tile buttons and pair items, and on a selected pair item.

### Named Rules
**The Flat at Rest Rule.** No surface casts a shadow at rest. The lift is a response to the pointer or to a selection, and the option under the pointer lifts while answered options dim to 42%.

## Shapes

Soft, generous rounding, like crayon tiles and school cards: 10px for selects and rail buttons, 12px for buttons, chips, topic rows and the toast, 16px for options, pair items and panels, 20px for the start button, 24px for letter tiles and word cards (18px on phones). Circles for the speaker button and the stamp. The plate is open, with no box: just the heavy 4px ink rule above and a hairline below, like a ruled primer page. Borders are 1–2px hairlines, and 1.5px on buttons and selects.

## Components

### Buttons
- **Shape:** gently rounded (12px).
- **Primary:** Sea-Teal Rail fill, white Golos 600 text, 11px 20px padding. Hover goes to Rail Deep.
- **Secondary:** Paper fill, 1.5px Strong Hairline border. Hover turns the border teal.
- **Start (signature primary):** a full-width teal band (max 640px, 20px radius, 20px 26px padding) with a shuffle icon, Rubik 700 25px label, a sub-line and an arrow. Hover: Rail Deep plus Teal Lift. There is one per home screen, and Enter triggers it.
- **Rail buttons:** transparent with a Rail Line outline. The active one fills with Lemon and ink text.
- **Focus:** a 3px Focus Teal outline at 2px offset on the page, Lemon inside the rail.

### Chips (mode chips)
- **Style:** a flat crayon fill set by its mode group, 12px radius, 10px 14px padding, a Golos 600 title and a 13px description.
- **State:** lift on hover, 45% opacity when disabled.

### Answer Options
- **Style:** Paper, a 2px Hairline border, 16px radius, min-height 76px, a small key badge (1–6) at left and room on the right for the stamp.
- **States:** hover gives a teal border plus lift. Correct: Stamp Teal border on Teal Wash plus a teal stamp. Wrong: Brick border on Brick Wash plus a brick stamp. Other options dim to 42%. Picture options stack the emoji over a caption at 168px tall.

### Cards / Containers
- **Word card:** Paper, Hairline border, 24px radius, a 104px crayon top (topic colour) holding the emoji or the initial, and a body with 14–16px padding. Learned words fade to 55%.
- **Answer panel / mistake rows:** Paper, Hairline border, 16px radius, no shadow.

### Inputs / Fields
- **Select:** Paper, 1.5px Strong Hairline border, 10px radius, 9px 12px padding. Checkboxes use the teal accent colour.

### Navigation (rail)
- Brand in Rubik 800 27px. Topic rows show a checkbox (Lemon fill when on), the Romanian name, the Russian gloss in Rail Muted and a tabular count. A selected row gets a 13% white wash, and learned counts are ticked in Pistachio. During a session the rail swaps the topic list for the mode name, a 54px count, a Lemon progress bar and the tally wells.

### Letter Tile (signature)
A 196px crayon square (24px radius) holding the word's initial in Rubik 800 132px in Sea-Teal ("Pp"). The fill comes from the question type or topic, as set out in The Crayon Is a Code Rule. The listening tile is a Lemon speaker button, and the picture tile holds the emoji.

### Teacher's Stamp (signature)
A circle tilted -12°, drawn as a double ring with a currentColor border plus an inset paper ring, holding a check, a cross or a grade letter in Rubik 800. It comes in three sizes: 40px on options and pairs, 64px in the answer panel, and 210px for the calificativ on results (140px on phones). It lands with a single .42s scale-and-rotate. Teal for correct and FB/B, Brick for wrong and S/I. The stamp stays on the option after it lands.

## Do's and Don'ts

### Do:
- **Do** give every word page the plate: crayon letter tile, Rubik 800 word, emoji, between a 4px ink rule and a hairline.
- **Do** mark answers with the rotated teacher's stamp and keep it on the option. Teal means right, Brick means wrong.
- **Do** pick crayon fills by meaning: the topic rotation lavender, apricot, pistachio, lemon, mint, lime, and the question types RU = Apricot, picture = Pistachio, listening = Lemon.
- **Do** keep one teal primary action per screen and let Enter trigger it.
- **Do** reserve the heights of the plate and answer panel so the frame never moves between questions.
- **Do** honour reduced motion. The only motions are the stamp landing, the emoji rising, the pair mismatch shake and the hover lift.

### Don't:
- **Don't** show the word as a grey flashcard centred on a blank screen with a green progress bar.
- **Don't** use pink, rose or raspberry anywhere.
- **Don't** use Brick for anything except mistakes and failing grades.
- **Don't** add shadows to surfaces at rest. The Teal Lift is for hover and selection only.
- **Don't** put an uppercase label above a heading. The tracked uppercase label only names a group of controls.
- **Don't** use a crayon fill that doesn't encode a topic, question type or mode group.

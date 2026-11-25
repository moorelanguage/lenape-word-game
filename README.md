# Word guessing game 
This repo is for a Lenape Language Word game, which has support for Unami and Munsee Dialects.
See the [Daily Changelog](daily-changelog.md) file for the Daily Changelog.  
    brief history: Development started on 2025-12-07, idea on 2025-12-06. 2025-12-08 at 1:56 AM is when this fork went public. 
Game Link: https://moorelanguage.github.io/lenape-word-game/ 

## Running the Game
### Website
Navigate to https://moorelanguage.github.io/lenape-word-game/ and have fun! 

### Electron
I am currently working on development for the electron app so this game can be played offline

## Table of Contents 
- [Running the game](#running-the-game)
- [Tech Stack](#tech-stack)
- [Development-Related](#development-related)
    - includes roadmap and known issues
- [License](#license)
- [Acknowledgements](#acknowledgments) 
- [Other](#other)
- [Sources for Words](#sources-for-words)
- [Badges](#badges)


## Tech Stack

- React
- TypeScript
- Vite
- Motion for animations
- VS Code as my IDE
- Github pages for deployment 
- Electron for desktop application

## Development-Related 
### Development Mode

To run the game in development mode with hot reloading:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is in use).

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Known issues
Munsee dialect has less words than unami dialect. I am working on adding more words to both. 

### Development Roadmap
This Roadmap is in order of "sooner -> later" 

- add more words 
- fix logo placeholder render 
~~- add animation to make the letters flip like a card! Make it feel like a card game! ~~ scrapped idea for now
- Southern Unami, creating an option to toggle with or without diacritics depending on what the user wants. 

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspiration from the original Wordle game
- Thanks to The-CodingSloth and all contributors and testers of CodingSloth's game so I could make this a basis for mine...thank you!/wanishi ta! 

## Other
I am a Lenape Language Learner and Enthusaist, I love exploring languages and building tools to support language learning and tools that are in Lenape. 
I have some online projects:
- ![Munsee Dialect Lenape Language Unix Timestamps](https://github.com/moorelanguage/Munsee-Dialect-Unix-Timestamps) which is a program takes the current Unix timestamp and gives you the Unix timestamp in the Munsee Dialect of Lenape.
- [![Tëmp Kaxkëni](https://img.shields.io/badge/Tëmp_Kaxkëni-B22222?)](https://github.com/moorelanguage/Temp-Kaxkeni) which is a reskin of Brainfuck in the Lenape Language. 


This is a fork of a program by The-CodingSloth. Wanishi ta!   
Here's a badge to go to CodingSloth's channel:    
[![TheCodingSloth](https://img.shields.io/badge/TheCodingSloth-6B8F71?logo=youtube&logoColor=fff)](https://www.youtube.com/@TheCodingSloth)

## Sources for Words 
- talk-lenape.org 
- enx eeden 
- conversations in the lenape language 6th edition textbook 
- Mukurtu Midwest Munsee Dictionary 
- quizlet.com/user/VNNicholas/sets munsee flashcards
- John O'Meara's dictionary of the munsee dialect 

## Badges 
- [![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)  
- [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white)](#)
- [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
- [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
- [![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](#) 
- [![Electron](https://img.shields.io/badge/Electron-2B2E3A?logo=electron&logoColor=fff)](#)
- [![MIT License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

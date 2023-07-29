import { LoremIpsum } from 'lorem-ipsum';

export const random = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 4,
    min: 4,
  },
});

import { random } from '../../shared/lib/random';

const SENTENCES_MIN = 1;
const SENTENCES_MAX = 100;

export const generateRandomTextList = (count: number) => {
  return Array.from({ length: count }).map(() =>
    random.generateSentences(
      random.generator.generateRandomInteger(SENTENCES_MIN, SENTENCES_MAX),
    ),
  );
};

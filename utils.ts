import {MCQuestionType, TFQuestionType} from './types';
import {easyMC, easyTF} from './questions/easy';

function getRandomElementsFromArray(array: (MCQuestionType|TFQuestionType)[], numElements: number) : (MCQuestionType|TFQuestionType)[] {
    // Shuffle the array (Fisher-Yates shuffle)
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    // Slice the shuffled array to get the desired number of elements
    return shuffledArray.slice(0, numElements);
  }

export function getEasyQuestions(number: number, type: string) : (MCQuestionType|TFQuestionType)[] {
    if (type == 'mc') {
        return getRandomElementsFromArray(easyMC, number);
    }
    else {
        return getRandomElementsFromArray(easyTF, number);
    }
}
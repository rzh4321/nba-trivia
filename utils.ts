import { MCQuestionType, TFQuestionType } from "./types";
import { easyMC, easyTF } from "./questions/easy";
import { mediumMC, mediumTF } from "./questions/medium";
import { hardMC, hardTF } from "./questions/hard";

function getRandomElementsFromArray(
  array: (MCQuestionType | TFQuestionType)[],
  numElements: number,
): (MCQuestionType | TFQuestionType)[] {
  // Shuffle the array (Fisher-Yates shuffle)
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  // Slice the shuffled array to get the desired number of elements
  return shuffledArray.slice(0, numElements);
}

export function getEasyQuestions(
  number: number,
  type: string,
): (MCQuestionType | TFQuestionType)[] {
  console.log("in getEasyQuestions");
  if (type == "mc") {
    console.log("u chose mc, calling getRandomElements");
    return getRandomElementsFromArray(easyMC, number);
  } else if (type == "tf") {
    return getRandomElementsFromArray(easyTF, number);
  } else {
    return getRandomElementsFromArray([...easyMC, ...easyTF], number);
  }
}

export function getMediumQuestions(
  number: number,
  type: string,
): (MCQuestionType | TFQuestionType)[] {
  if (type == "mc") {
    return getRandomElementsFromArray(mediumMC, number);
  } else if (type == "tf") {
    return getRandomElementsFromArray(mediumTF, number);
  } else {
    return getRandomElementsFromArray([...mediumMC, ...mediumTF], number);
  }
}

export function getHardQuestions(
  number: number,
  type: string,
): (MCQuestionType | TFQuestionType)[] {
  if (type == "mc") {
    return getRandomElementsFromArray(hardMC, number);
  } else if (type == "tf") {
    return getRandomElementsFromArray(hardTF, number);
  } else {
    return getRandomElementsFromArray([...hardMC, ...hardTF], number);
  }
}

export function getAnyDiff(
  number: number,
  type: string,
): (MCQuestionType | TFQuestionType)[] {
  if (type == "mc") {
    return getRandomElementsFromArray(
      [...easyMC, ...mediumMC, ...hardMC],
      number,
    );
  } else if (type == "tf") {
    return getRandomElementsFromArray(
      [...easyTF, ...mediumTF, ...hardTF],
      number,
    );
  }
  // any difficulty, any type
  else {
    return getRandomElementsFromArray(
      [...easyTF, ...mediumTF, ...hardTF, ...easyMC, ...mediumMC, ...hardMC],
      number,
    );
  }
}

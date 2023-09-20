import { useEffect, useState } from "react";
import { getCountries } from "../shared/services/countryService";
import { Country } from "../shared/types";

type Question = {
  country: string;
  correctAnswer: string;
  answers: string[];
};

export const useQuiz = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [question, setQuestion] = useState<Question>({
    country: "",
    correctAnswer: "",
    answers: [],
  });
  const [correct, setCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitAnswer = (answer: string) => {
    if (answer === question.correctAnswer) {
      setCorrect(true);
      setSubmitted(true);
    } else {
      setCorrect(false);
      setSubmitted(true);
    }
  };

  const getRandomIndexesExcluding = (
    arrayLength: number,
    excludeIndex: number
  ) => {
    const randomIndexes: number[] = [];

    while (randomIndexes.length < 2) {
      const index = Math.floor(Math.random() * arrayLength);

      if (index !== excludeIndex && !randomIndexes.includes(index)) {
        randomIndexes.push(index);
      }
    }

    return randomIndexes;
  };

  const getQuizQuestion = (countries: Country[]) => {
    const randomCountryIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomCountryIndex];

    const randomCapitalIndexes = getRandomIndexesExcluding(
      countries.length,
      randomCountryIndex
    );
    const wrongCapitals = randomCapitalIndexes.map(
      (index) => countries[index].capital
    );

    setQuestion({
      country: randomCountry.name,
      correctAnswer: randomCountry.capital,
      answers: [randomCountry.capital, ...wrongCapitals],
    });
  };

  const getNewQuestion = () => {
    setSubmitted(false);
    getQuizQuestion(countries);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const delay = 500;
    const fetchData = async () => {
      try {
        const countries = await getCountries();
        setCountries(countries);
        getQuizQuestion(countries);

        timer = setTimeout(() => {
          setLoading(false);
        }, delay);
      } catch (error: any) {
        setError(true);
      }
    };
    fetchData();
    // a very well known clean up function
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return {
    loading,
    countries,
    error,
    getNewQuestion,
    question,
    correct,
    submitted,
    submitAnswer,
  };
};

export default useQuiz;

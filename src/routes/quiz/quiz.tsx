import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";
import useQuiz from "../../hooks/useQuiz";
import AnswerButton from "../../shared/components/AnswerButton";

const Quiz = () => {
  const navigate = useNavigate();
  const {
    loading,
    error,
    getNewQuestion,
    question,
    correct,
    submitted,
    submitAnswer,
  } = useQuiz();
  const { country, correctAnswer, answers } = question;

  return (
    <div className="w-full flex flex-col items-center gap-y-20 my-20 ">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-7xl font-bold">Quiz</h1>
        {error ? (
          <h2 className="text-2xl font-bold">
            Looks like something went wrong, please try again
          </h2>
        ) : loading ? (
          <h2 className="text-2xl font-bold">Loading...</h2>
        ) : (
          <>
            <h2 className="text-2xl font-bold">
              What is the capital of {country}?
            </h2>
            <div className="flex flex-col md:flex-row gap-5">
              {answers.map((answer) => (
                <AnswerButton
                  text={answer}
                  handleClick={() => submitAnswer(answer)}
                  disabled={submitted}
                />
              ))}
            </div>
            {correct && submitted ? (
              <h2 className="text-2xl font-bold h-6">Correct!</h2>
            ) : submitted ? (
              <h2 className="text-2xl font-bold h-6">
                Incorrect, answer is {correctAnswer}
              </h2>
            ) : (
              <div className="h-6"></div>
            )}
          </>
        )}
        <div className="flex flex-col md:flex-row gap-2">
          <Button text="New Question" handleClick={() => getNewQuestion()} />
          <Button text="Exit" handleClick={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;

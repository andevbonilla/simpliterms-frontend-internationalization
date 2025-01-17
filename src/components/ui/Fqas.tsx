import { Question } from "./Question";

interface questions {
  question1: string,
  answer1: string,
  question3: string,
  answer3: string,
  question4: string,
  answer4: string,
  question5: string,
  answer5: string
}

export const Fqas = ({
  question1,
  answer1,
  question3,
  answer3,
  question4,
  answer4,
  question5,
  answer5
}: questions) => {


  return (
    <>
      <Question
        last={false}
        question={question1}
        answer={answer1}
      />

      <Question
        last={false}
        question={question3}
        answer={answer3}
      />

      <Question
        last={true}
        question={question4}
        answer={answer4}
      />

      <Question
        last={true}
        question={question5}
        answer={answer5}
      />
    </>
  )
}

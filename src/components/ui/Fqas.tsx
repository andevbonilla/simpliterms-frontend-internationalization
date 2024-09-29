import { Question } from "./Question";

interface questions {
  question1: string,
  answer1: string,
  question2: string,
  answer2: string,
  question3: string,
  answer3: string,
  question4: string,
  answer4: string
}

export const Fqas = ({
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
  question4,
  answer4
}: questions) => {


  return (
    <>
      <Question
        last={false}
        question={question1}
        answer={answer1}
      >
      </Question>

      <Question
        last={false}
        question={question2}
        answer={answer2}
      >
      </Question>

      <Question
        last={false}
        question={question3}
        answer={answer3}
      >
      </Question>

      <Question
        last={true}
        question={question4}
        answer={answer4}
      >
      </Question>
    </>
  )
}

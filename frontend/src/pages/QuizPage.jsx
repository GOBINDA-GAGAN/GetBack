import React, { use, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button';
import { ArrowBigRight, ArrowLeft, ArrowRight, NotebookText, Pause, Play, Timer } from 'lucide-react';
import { QuestionCard } from '../components/QuestionCard';
import AI_ExplanationsImage from "../assets/sidebar/explanations.png"

const aiGeneratedQuestions = {
  totalQuestions: 2,
  duration: 30,
  questions: [
    {
      id: 1,
      topic: "React",
      question: "Which hook is used for state management?",
      difficulty: "Easy",
      options: [
        { id: "A", text: "useState" },
        { id: "B", text: "useEffect" },
        { id: "C", text: "useRef" },
        { id: "D", text: "useMemo" },
      ],
      answer: "A",
      explanation:
        "useState is the primary React hook for managing component state.",
    },
    {
      id: 2,
      topic: "React",
      question: "Which hook is used for state management haa",
      difficulty: "Easy",
      options: [
        { id: "A", text: "useState" },
        { id: "B", text: "useEffect" },
        { id: "C", text: "useRef" },
        { id: "D", text: "useMemo" },
      ],
      answer: "A",
      explanation:
        "useState is the primary React hook for managing component state.",
    },
  ],
};

export const QuizPage = () => {

  const navigate = useNavigate();
  const { sessionId } = useParams();


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = aiGeneratedQuestions.questions[currentQuestionIndex];
  const totalQuestions = aiGeneratedQuestions.totalQuestions

  const handleSelectAnswer = (answerId) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < aiGeneratedQuestions.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
    calculatePersentage();
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
    calculatePersentage();
  };

  let percentage = 0.0



  percentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  console.log(percentage);



  const handelResult = () => {
    navigate(`/quiz/session/${sessionId}/result`);
  }
  return (
    <div className="flex justify-between mt-2 rounded-md gap-6">

      {/* Left Section */}
      <div className="w-[75%] space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full p-1 flex items-center justify-center bg-primary shadow">
            <ArrowLeft size={20} color='white' />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text">AI Quiz</h2>
            <p className="text-sm">
              Test your knowledge, get AI-powered explanations and improve your skills
            </p>
          </div>
        </div>

        <div className="bg-secondary border-2 rounded-2xl space-y-4">
          <div className=" border-b border p-4  flex gap-4 items-center">
            <div className="w-full flex gap-4 items-center" >
              <div className=" w-fit bg-primary p-3 rounded-full flex items-center justify-center">
                <NotebookText size={20} color="white" />
              </div>
              <div className='w-full space-y-2  flex items-center'>
                <div className='w-full'>
                  <h4 className='font-semibold'>Question {currentQuestion.id} out of {totalQuestions}</h4>
                  <div className='flex w-full items-center gap-3'>
                    <div className='w-full h-1 bg-accent rounded-md  items-center '>
                      <div
                        className="h-full rounded-md bg-primary transition-all duration-500 ease-in-out"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className='text-[11px] w-[20%]'>{percentage}% Compltet</div>
                  </div>
                </div>
              </div>




            </div>
            <div className="flex items-center justify-between gap-4  rounded-xl bg-secondary">

              <div className="flex items-center gap-3">
                <Timer className="text-primary size-5" />

                <div className="flex flex-col items-center">
                  <p className="text-xl font-bold text-primary leading-none">
                    12:32
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    Time Left
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-lg shadow"
              >
                <Pause className="size-4" />
              </Button>

            </div>

          </div>





          <div className='p-4'>
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onSelectAnswer={handleSelectAnswer}
            />
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-6 rounded-xl"
              >
                <ArrowLeft className="size-4" />
                Previous
              </Button>

              <Button
                size="lg"
                onClick={handleNext}
                disabled={
                  currentQuestionIndex ===
                  aiGeneratedQuestions.questions.length - 1
                }
                className="px-6 py-6 rounded-xl"
              >
                Next Question
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-between rounded-2xl border bg-secondary p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-primary">✦</span>
              <h3 className="font-semibold">Note</h3>
            </div>

            <p className="text-sm text-muted-foreground max-w-md">
              AI Explanations and scores will be shown after quiz submission.
            </p>

            <p className="text-sm text-muted-foreground">
              Take your time and review your answers before submitting!
            </p>
          </div>

          <img
            src={AI_ExplanationsImage}
            alt="note"
            className="h-48 w-ful"
          />
        </div>



      </div>

      {/* Right Sidebar */}
      <div className="w-[25%]">
        <Button
          onClick={handelResult}
          className="w-full rounded-md bg-[linear-gradient(180deg,var(--button-from),var(--button-to))]"
        >
          Submit Quiz
          <ArrowBigRight className="size-4" />
        </Button>
      </div>

    </div>
  )
}
import React from 'react'
import { quizSetupData } from '../constants/quizSetupPage'
import { QuizStep } from '../components/StepText';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { ListCollapse, SlidersHorizontal, Sparkles, Timer, UserRound } from 'lucide-react';
import { Button } from '../components/ui/button';
import { QuizPreview } from '../components/quizPreviewData';
import {
  User,
  BookOpen,
  Target,
  Flag,
  Brain,
  Clock3,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const quizPreviewData = {
  previewItems: [
    {
      icon: User,
      label: "Role",
      value: "Frontend Developer",
    },
    {
      icon: BookOpen,
      label: "Topics",
      value: "JavaScript, React",
    },
    {
      icon: Target,
      label: "Difficulty",
      value: "Medium",
    },
    {
      icon: Flag,
      label: "Questions",
      value: "20",
    },
    {
      icon: Brain,
      label: "Type",
      value: "MCQ",
    },
    {
      icon: Clock3,
      label: "Duration",
      value: "30 Minutes",
    },
  ],

  benefits: [
    "Personalized questions",
    "Detailed AI explanations",
    "Performance breakdown",
    "Weak area identification",
    "XP and leaderboard points",
  ],
};

export const QuizSetupPage = () => {
  const navigate = useNavigate();

  const quizData = quizSetupData;
  const step_1_Data = quizData[0];
  const step_2_Data = quizData[1];
  const step_3_Data = quizData[2];
  const step_4_Data = quizData[3];
  const step_5_Data = quizData[4];
  const step_6_Data = quizData[5];
  const step_7_Data = quizData[6];



  const handleGenerateQuiz = () => {

    const sessionId = crypto.randomUUID();
 
    

    navigate(`/quiz/session/${sessionId}/attempt`);
  };

  return (
    <div> {/* setUp step */}
      <div className='flex justify-between mt-2 rounded-md gap-6 '>
        <div className='w-[75%]   space-y-4'>

          {/* step-1 */}

          <div className='p-4 bg-secondary border  rounded-md flex justify-between items-center'>
            <div>
              <QuizStep title={step_1_Data.title} subtitle={step_1_Data.subtitle} step={step_1_Data.step} />
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full font-semibold rounded-md bg-accent hover:border-primary/50 hover:bg-accent ">
                  <UserRound />

                  <SelectValue placeholder={`Select ${step_1_Data.select}`} />
                </SelectTrigger>

                <SelectContent className="rounded-md p-2">
                  {step_1_Data.select_field.map((item, idx) => (
                    <SelectItem
                      key={idx}
                      value={item.value}
                      className="rounded-md"
                    >

                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>

          {/* step-2 */}
          <div className='p-4  bg-secondary shadow border rounded-md flex justify-between items-center'>
            <div className='w-full'>
              <div className='flex justify-between items-end'>
                <QuizStep title={step_2_Data.title} subtitle={step_2_Data.subtitle} step={step_2_Data.step} />

                <span className='text-primary font-semibold'>{0} Selected</span>
              </div>


              <div className='mt-4 w-full'>
                <div className=" grid grid-cols-5 gap-4">
                  {
                    step_2_Data.select_field.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="px-4 py-2 border rounded-lg flex items-center gap-3 hover:border-primary/50 hover:bg-accent"
                        >
                          <Icon className={`size-5 ${item.iconColor}`} />

                          <span className="text-sm">
                            {item.label}
                          </span>
                        </div>
                      );
                    })
                  }
                </div>
                <div className='flex p-2 mt-4 cursor-pointer  rounded-md gap-3 border items-center justify-center  hover:border-primary/50 hover:bg-accent'>
                  <ListCollapse className='text-primary' />
                  <h4 className='text-sm'>More</h4>
                </div>
              </div>
            </div>


          </div>
          {/* step-3 */}
          <div className='p-4  bg-secondary shadow border rounded-md flex justify-between items-center'>
            <div className='w-full'>
              <div className='flex justify-between items-center'>
                <QuizStep title={step_3_Data.title} subtitle={step_3_Data.subtitle} step={step_3_Data.step} />
                <div className="grid md:grid-cols-4 gap-4">
                  {step_3_Data.select_field.map((item) => (
                    <label
                      key={item.value}
                      className={`border rounded-lg p-2 cursor-pointer flex items-center gap-3 hover:border-primary ${item.borderColor}`}
                    >
                      <input
                        type="radio"
                        name="difficulty"
                        value={item.value}
                        className="w-4 h-4"
                      />

                      <div>
                        <h3 className={`text-sm ${item.textColor}`}>
                          {item.label}
                        </h3>
                      </div>
                    </label>
                  ))}
                </div>
              </div>



            </div>


          </div>
          {/* step-4 */}
          <div className='p-4 bg-secondary border  rounded-md flex justify-between items-center'>
            <div>
              <QuizStep title={step_4_Data.title} subtitle={step_4_Data.subtitle} step={step_4_Data.step} />
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full rounded-md font-semibold bg-accent hover:border-primary/50 hover:bg-accent ">
                  <SlidersHorizontal />
                  <SelectValue className='' placeholder={`Select ${step_4_Data.select}`} />
                </SelectTrigger>

                <SelectContent className="rounded-md p-2">
                  {step_4_Data.select_field.map((item, idx) => (
                    <SelectItem
                      key={idx}
                      value={item.value}
                      className="rounded-md"
                    >
                      {item.icon && (
                        <span className="mr-2">
                          {item.icon}
                        </span>
                      )}

                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>
          {/* step-5 */}
          <div className='p-4 bg-secondary border  rounded-md flex justify-between items-center'>
            <div>
              <QuizStep title={step_5_Data.title} subtitle={step_5_Data.subtitle} step={step_5_Data.step} />
            </div>
            <div>
              <div className="flex gap-3">
                {step_5_Data.select_field.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.value}
                      className="border w-fit rounded-lg p-2 flex items-center gap-3 hover:border-primary hover:bg-accent cursor-pointer transition-all"
                    >
                      <Icon className={`size-5 ${item.iconColor}`} />

                      <div>
                        <h3 className="text-sm">{item.label}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
          {/* step-6 */}
          <div className='p-4 bg-secondary border  rounded-md flex justify-between items-center'>
            <div>
              <QuizStep title={step_6_Data.title} subtitle={step_6_Data.subtitle} step={step_6_Data.step} />
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full rounded-md font-semibold bg-accent hover:border-primary/50 hover:bg-accent ">
                  <Timer />
                  <SelectValue className='' placeholder={`Select ${step_6_Data.select}`} />
                </SelectTrigger>

                <SelectContent className="rounded-md p-2">
                  {step_6_Data.select_field.map((item, idx) => (
                    <SelectItem
                      key={idx}
                      value={item.value}
                      className="rounded-md"
                    >
                      {item.icon && (
                        <span className="mr-2">
                          {item.icon}
                        </span>
                      )}

                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>

          {/* step-7 */}
          <div className='p-4  bg-secondary shadow border rounded-md flex justify-between items-center'>
            <div className='w-full'>
              <div className='flex justify-between items-end'>
                <QuizStep title={step_7_Data.title} subtitle={step_7_Data.subtitle} step={step_7_Data.step} />

                <span className='text-primary font-semibold'>{0} Selected</span>
              </div>
              <div className='mt-4 w-full'>
                <div className=" grid grid-cols-3 gap-4">
                  {
                    step_7_Data.select_field.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="px-4 py-2 border rounded-lg flex items-center gap-3 hover:border-primary/50 hover:bg-accent"
                        >
                          <Icon className={`size-5 ${item.iconColor}`} />

                          <span className="text-sm">
                            {item.label}
                          </span>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>


          </div>


          <Button onClick={handleGenerateQuiz} className="rounded-md w-full bg-[linear-gradient(180deg,var(--button-from),var(--button-to))] text-white cursor-pointer">
            <Sparkles className="size-4" />
            Generate AI Quiz
          </Button>


        </div>


        <div className='w-[25%] grid  grid-rows-[73%_20%] gap-4' >
          <QuizPreview quizData={quizPreviewData} />

        </div>

      </div>
    </div>
  )
}

import React from 'react'
import { quizSetupData } from '../constants/quizSetupPage'
import { QuizStep } from '../components/StepText';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const QuizSetupPage = () => {

  const quizData = quizSetupData;

  const step_1_Data = quizData[0];
  const step_2_Data = quizData[1];
  const step_3_Data = quizData[2];
  const step_4_Data = quizData[3];
  const step_5_Data = quizData[4];
  return (
    <div> {/* setUp step */}
    <div>

      
      
    </div>
    </div>
  )
}

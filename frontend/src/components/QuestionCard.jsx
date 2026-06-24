import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, NotebookText, TowelRack, TowerControl } from "lucide-react";

export const QuestionCard = ({
    question,
    selectedAnswer,
    onSelectAnswer,
}) => {
    return (
        <div className="bg-secondary rounded-md  space-y-8">
            {/* Question Header */}
            <div className=" space-y-4">
                <div className="px-5 py-1  w-fit bg-primary/10 text-primary text-[10px] rounded-full">
                    {question.topic}
                </div>
                {/* Question */}
                <h2 className="text-xl font-semibold space-x-2">

                    <span>{question.question}</span>
                </h2>
                <div className="text-sm text-green-500 py-1 text-[12px] rounded-full bg-green-200/50 flex gap-2 items-center px-2 w-fit">
                    <div className="bg-green-500 h-1 w-1 rounded-full" />
                    <span>
                        {question.difficulty}
                    </span>
                </div>
            </div>




            {/* Options */}
            <div className="grid gap-3">
                {question.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;

                    return (
                        <button
                            key={option.id}
                            onClick={() => onSelectAnswer(option.id)}
                            className={`w-full flex items-center justify-between rounded-xl border p-4 transition-all duration-200
          ${isSelected
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/40"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold
              ${isSelected
                                            ? "bg-primary text-white"
                                            : "bg-muted text-foreground"
                                        }`}
                                >
                                    {option.id}
                                </div>

                                <span className="font-medium">
                                    {option.text}
                                </span>
                            </div>

                            {isSelected && (
                                <CheckCircle2 className="size-5 text-primary" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
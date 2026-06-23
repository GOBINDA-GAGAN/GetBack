import React from "react";

export const StepText = ({ title, step }) => {
    return (
        <h1 className="font-semibold">
            <span className="text-primary">Step {step}: </span>
            {title}
        </h1>
    );
};

export const QuizStep = ({ title, subtitle, step }) => { 
    return (
        <div className="flex gap-3 items-center ">
            <span className="bg-primary text-[11px] text-primary-foreground size-6 rounded-lg flex items-center justify-center font-semibold shadow-sm">
                {step}
            </span>

            <div className="space-y-1">
                <p className="font-semibold">{title}</p>
                <p className="text-[11px] text-muted-foreground">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export const PreviewItem = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-secondary">
      <p className="text-sm text-muted-foreground">{label}</p>

      <div>{value}</div>
    </div>
  );
};
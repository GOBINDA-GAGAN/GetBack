

import {
  ClipboardList,
  User,
  Briefcase,
  Wrench,
  Building2,
  Layers3,
  ShieldCheck,
  Clock3,
  MessageSquareText,
} from "lucide-react";

export default function InterviewSummary({
  source,
  role,
  experience,
  skills,
  company,
  interviewType,
  difficultyLevel,
  duration,
  interviewMode,
}) {
const items = [
  {
    icon: ClipboardList,
    label: "Source",
    value: source,
    color: "text-violet-500",
  },
  {
    icon: User,
    label: "Role",
    value: role,
    color: "text-blue-500",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: experience,
    color: "text-green-500",
  },
  {
    icon: Wrench,
    label: "Top Skills",
    value: skills.join(", "),
    color: "text-cyan-500",
  },
  {
    icon: Building2,
    label: "Company",
    value: company,
    color: "text-red-500",
  },
  {
    icon: Layers3,
    label: "Interview Type",
    value: interviewType,
    color: "text-purple-500",
  },
  {
    icon: ShieldCheck,
    label: "Difficulty Level",
    value: difficultyLevel,
    color: "text-orange-500",
  },
  {
    icon: Clock3,
    label: "Duration",
    value: duration,
    color: "text-amber-500",
  },
  {
    icon: MessageSquareText,
    label: "Interview Mode",
    value: interviewMode,
    color: "text-indigo-500",
  },
];

  return (
    <div className="rounded-2xl border bg-accent p-4">
      <h2 className="font-semibold mb-2">
        Your Interview Summary
      </h2>

      <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="grid grid-cols-[20px_90px_1fr] gap-3 items-center"
            >
              <Icon className={`h-4 w-4 ${item.color}`} />

              <span className="text-[10px] text-muted-foreground">
                {item.label}
              </span>

              <span className="text-[11px]">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
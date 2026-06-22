import { CircleCheckBig, ShieldAlert, TriangleAlert } from "lucide-react";
import {
    Brain,
    Zap,
    BarChart3,
    Target,
    Lightbulb,
} from "lucide-react";


export const quizSetupData = [
    {
        step: 1,
        title: "Select Role",
        subtitle: "Chose your target role of domain",
        select: "Role",
        select_field: [
            {
                label: "Frontend Developer",
                value: "frontend_developer",
                icon: "💻"
            },
            {
                label: "Backend Developer",
                value: "backend_developer",
                icon: "⚙️"
            },
            {
                label: "Full Stack Developer",
                value: "full_stack_developer",
                icon: "🚀"
            }
        ]
    },
    {
        step: 2,
        title: "Select Topic",
        subtitle: "Chose your target role of domain",
        select_field: [
            {
                label: "JavaScript",
                value: "javascript",
                icon: "🟨"
            },
            {
                label: "React",
                value: "react",
                icon: "⚛️"
            },
            {
                label: "Node.js",
                value: "nodejs",
                icon: "🟩"
            },
            {
                label: "Java",
                value: "java",
                icon: "☕"
            },
            {
                label: "Python",
                value: "python",
                icon: "🐍"
            }
        ]
    },
    {
        step: 3,
        title: "Difficulty Level",
        subtitle: "chose the difficulty for your Quiz",
        select_field: [
            {
                label: "Easy",
                value: "easy",
                description: "Beginner Friendly",
                icon: CircleCheckBig,

                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                iconColor: "text-green-600",
            },

            {
                label: "Medium",
                value: "medium",
                description: "Moderate Level",
                icon: TriangleAlert,

                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200",
                iconColor: "text-yellow-600",
            },

            {
                label: "Hard",
                value: "hard",
                description: "Advanced Level",
                icon: ShieldAlert,

                bgColor: "bg-red-50",
                borderColor: "border-red-200",
                iconColor: "text-red-600",
            },
        ],
    },
    {
        step: 4,
        title: "Number of Question",
        subtitle: "Select the number of questions",
        select_field: [
            {
                label: "10 Questions",
                value: 10,
            },
            {
                label: "20 Questions",
                value: 20,
            },
            {
                label: "30 Questions",
                value: 30,
            },
            {
                label: "40 Questions",
                value: 40,
            },
            {
                label: "50 Questions",
                value: 50,
            },
        ],
    },
    {
        step: 5,
        title: "Quiz Type",
        subtitle: "Select the number of questions",
        select_field: [
            {
                label: "10 Questions",
                value: 10,
            },
            {
                label: "20 Questions",
                value: 20,
            },
            {
                label: "30 Questions",
                value: 30,
            },
            {
                label: "40 Questions",
                value: 40,
            },
            {
                label: "50 Questions",
                value: 50,
            },
        ],
    },
    {
        step: 6,
        title: "Time Duration",
        subtitle: "Select the quiz duration",
        select_field: [
            {
                label: "10 Minutes",
                value: 10,
            },
            {
                label: "20 Minutes",
                value: 20,
            },
            {
                label: "30 Minutes",
                value: 30,
            },
            {
                label: "45 Minutes",
                value: 45,
            },
            {
                label: "60 Minutes",
                value: 60,
            },
        ],
    },
    {
        step: 7,
        title: "AI Features",
        subtitle: "Select AI-powered features",
        select_field: [
            {
                label: "AI Explanation",
                value: "ai_explanation",
                icon: Brain,
            },
            {
                label: "Instant Feedback",
                value: "instant_feedback",
                icon: Zap,
            },
            {
                label: "Performance Analysis",
                value: "performance_analysis",
                icon: BarChart3,
            },
            {
                label: "Weakness Detection",
                value: "weakness_detection",
                icon: Target,
            },
        ],
    }

]
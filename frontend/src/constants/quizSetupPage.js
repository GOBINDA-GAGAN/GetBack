import { CircleCheckBig, ShieldAlert, TriangleAlert } from "lucide-react";
import {
    Brain,
    Zap,
    BarChart3,
    Target,
    Lightbulb,
} from "lucide-react";
import {
    FileCode,
    Atom,
    Server,
    Coffee,
    Code2,
    Braces,
    Database,
    Network,
    Globe,
    Smartphone,
} from "lucide-react";
import {
    CircleHelp,
    Code,
    MessageSquareText,
    Layers3,
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
        subtitle: "Choose the topics you want to be tests",
        select_field: [
            {
                label: "JavaScript",
                value: "javascript",
                icon: FileCode,
                iconColor: "text-yellow-500",
            },
            {
                label: "React",
                value: "react",
                icon: Atom,
                iconColor: "text-cyan-500",
            },
            {
                label: "Node.js",
                value: "nodejs",
                icon: Server,
                iconColor: "text-green-500",
            },
            {
                label: "Java",
                value: "java",
                icon: Coffee,
                iconColor: "text-orange-500",
            },
            {
                label: "Python",
                value: "python",
                icon: Code2,
                iconColor: "text-blue-500",
            },
            {
                label: "TypeScript",
                value: "typescript",
                icon: Braces,
                iconColor: "text-blue-600",
            },
            {
                label: "MongoDB",
                value: "mongodb",
                icon: Database,
                iconColor: "text-green-600",
            },
            {
                label: "Express.js",
                value: "express",
                icon: Network,
                iconColor: "text-gray-700",
            },
            {
                label: "Next.js",
                value: "nextjs",
                icon: Globe,
                iconColor: "text-black dark:text-white",
            },
            {
                label: "React Native",
                value: "react-native",
                icon: Smartphone,
                iconColor: "text-sky-500",
            },
        ]
    },
    {
        step: 3,
        title: "Difficulty Level",
        subtitle: "Chose the difficulty for your Quiz",
        select_field: [
            {
                label: "Easy",
                value: "easy",
                description: "Beginner Friendly",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                textColor: "text-green-700",
            },
            {
                label: "Medium",
                value: "medium",
                description: "Moderate Level",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200",
                textColor: "text-yellow-700",
            },
            {
                label: "Hard",
                value: "hard",
                description: "Advanced Level",
                bgColor: "bg-red-50",
                borderColor: "border-red-200",
                textColor: "text-red-700",
            },
            {
                label: "Mixed",
                value: "mixed",
                description: "Easy + Medium + Hard",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                textColor: "text-blue-700",
            },
        ],
    },
    {
        step: 4,
        title: "Number of Question",
        subtitle: "Select the number of questions",
        select: "Questions",
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
        subtitle: "Choose the type of questions",
        select_field: [
            {
                label: "MCQ",
                value: "mcq",
                description: "Multiple choice questions",
                icon: CircleHelp,
                iconColor: "text-blue-500",
            },
            {
                label: "Output Based",
                value: "output_based",
                description: "Predict code output",
                icon: Code,
                iconColor: "text-green-500",
            },
            {
                label: "Interview Style",
                value: "interview",
                description: "Theory and conceptual questions",
                icon: MessageSquareText,
                iconColor: "text-purple-500",
            },
            {
                label: "Mixed",
                value: "mixed",
                description: "MCQ + Output + Interview",
                icon: Layers3,
                iconColor: "text-orange-500",
            },
        ],
    },
    {
        step: 6,
        title: "Time Duration",
        subtitle: "Select the quiz duration",
        select:"Timer",
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
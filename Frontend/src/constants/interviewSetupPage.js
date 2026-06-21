import { Select } from "radix-ui";
import adobe from "@/assets/companyIcon/adobe.png";
import amazon from "@/assets/companyIcon/amazon.png";
import apple from "@/assets/companyIcon/apple.png";
import google from "@/assets/companyIcon/google.png";
import ibm from "@/assets/companyIcon/ibm.png";
import meta from "@/assets/companyIcon/meta.png";
import microsoft from "@/assets/companyIcon/microsoft.png";
import netflix from "@/assets/companyIcon/netflix.png";
import oracle from "@/assets/companyIcon/oracle.png";
import {
    Code,
    BriefcaseBusiness,
    MessageSquareHeart,
    Network,
    Layers3,
} from "lucide-react";
import {
  CircleCheckBig,
  TriangleAlert,
  ShieldAlert,
} from "lucide-react";


export const interviewSetupData = [
    {
        step: 1,
        title: "Choose an Option",
        subtitle: "Upload or Continue"
    },

    {
        step: 2,
        title: "Basic Information",
        subtitle: "Role, Experience & Skills",

        data: [
            {
                name: "What role are you looking for?",
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
                name: "Experience Level",
                select: "Experience",
                select_field: [
                    {
                        label: "0-1 Year",
                        value: "0-1_year"
                    },
                    {
                        label: "1-3 Years",
                        value: "1-3_years"
                    },
                    {
                        label: "3-5 Years",
                        value: "3-5_years"
                    },
                    {
                        label: "5+ Years",
                        value: "5_plus_years"
                    }
                ]
            },

            {
                name: "Top Skills",
                select: "Top Skills",
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
            }
        ]
    },

    {
        step: 3,
        title: "Interview Preferences",
        subtitle: "Company, Type & Level",

        data: [
            {
                name: "Select Company",
                select_field: [
                    {
                        label: "Google",
                        value: "google",
                        logo: google,
                    },
                    {
                        label: "Microsoft",
                        value: "microsoft",
                        logo: microsoft,
                    },
                    {
                        label: "Amazon",
                        value: "amazon",
                        logo: amazon,
                    },
                    {
                        label: "Meta",
                        value: "meta",
                        logo: meta,
                    },
                    {
                        label: "Apple",
                        value: "apple",
                        logo: apple,
                    },
                    {
                        label: "Netflix",
                        value: "netflix",
                        logo: netflix,
                    },
                    {
                        label: "Adobe",
                        value: "adobe",
                        logo: adobe,
                    },
                    {
                        label: "Oracle",
                        value: "oracle",
                        logo: oracle,
                    },
                    {
                        label: "IBM",
                        value: "ibm",
                        logo: ibm,
                    }
                ]
            },

            {
                name: "Interview Type",
                select_field: [
                    {
                        label: "Technical",
                        value: "technical",
                        icon: Code,
                    },
                    {
                        label: "HR",
                        value: "hr",
                        icon: BriefcaseBusiness,
                    },
                    {
                        label: "Behavioral",
                        value: "behavioral",
                        icon: MessageSquareHeart,
                    },
                    {
                        label: "System Design",
                        value: "system_design",
                        icon: Network,
                    },
                    {
                        label: "Mixed",
                        value: "mixed",
                        icon: Layers3,
                    },
                ],
            },

            {
                name: "Difficulty Level",
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
            }
        ]
    },

    {
        step: 4,
        title: "Duration & Mode",
        subtitle: "Time & Interview Mode",

        data: [
            {
                name: "Interview Duration",
                select_field: [
                    {
                        label: "10 Minutes",
                        value: 10
                    },
                    {
                        label: "20 Minutes",
                        value: 20
                    },
                    {
                        label: "30 Minutes",
                        value: 30
                    },
                    {
                        label: "45 Minutes",
                        value: 45
                    },
                    {
                        label: "60 Minutes",
                        value: 60
                    }
                ]
            },

            {
                name: "Interview Mode",
                select_field: [
                    {
                        label: "Text",
                        value: "text",
                        icon: "💬"
                    },
                    {
                        label: "Voice",
                        value: "voice",
                        icon: "🎤"
                    },
                    {
                        label: "Video",
                        value: "video",
                        icon: "📹"
                    }
                ]
            }
        ]
    },

    {
        step: 5,
        title: "Review & Start",
        subtitle: "Conform & Begin",


    }
];
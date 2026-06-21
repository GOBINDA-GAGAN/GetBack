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
                        icon: "🔍"
                    },
                    {
                        label: "Microsoft",
                        value: "microsoft",
                        icon: "🪟"
                    },
                    {
                        label: "Amazon",
                        value: "amazon",
                        icon: "📦"
                    }
                ]
            },

            {
                name: "Interview Type",
                select_field: [
                    {
                        label: "Technical",
                        value: "technical",
                        icon: "💻"
                    },
                    {
                        label: "HR",
                        value: "hr",
                        icon: "👥"
                    },
                    {
                        label: "Behavioral",
                        value: "behavioral",
                        icon: "🧠"
                    }
                ]
            },

            {
                name: "Difficulty Level",
                select_field: [
                    {
                        label: "Easy",
                        value: "easy",
                        description: "Beginner Friendly",
                        icon: "🟢"
                    },
                    {
                        label: "Medium",
                        value: "medium",
                        description: "Moderate Level",
                        icon: "🟡"
                    },
                    {
                        label: "Hard",
                        value: "hard",
                        description: "Advanced Level",
                        icon: "🔴"
                    }
                ]
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
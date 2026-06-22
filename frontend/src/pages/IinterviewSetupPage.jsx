import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { interviewSetupData } from "../constants/interviewSetupPage"
import { StepText } from '../components/StepText'
import ResumeCards from '../components/ResumeOptions'
import Dropdown from '../components/Dropdown'


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Building2, ShieldCheck } from 'lucide-react'
import { Sparkles } from "lucide-react";
import AIAssistantCard from '../components/AIAssistantCard'
import AIWillPrepare from '../components/AIWillPrepare'
import InterviewSummary from '../components/InterviewSummary'



const IinterviewSetupPage = () => {
    const topBar = interviewSetupData;


    const step_1_Data = topBar[0];
    const step_2_Data = topBar[1];
    const step_3_Data = topBar[2];
    const step_4_Data = topBar[3];
    const step_5_Data = topBar[4];

    const interviewSummary = {
        source: "Without Resume",
        role: "Frontend Developer",
        experience: "Fresher",
        skills: ["CSS", "JavaScript", "React"],
        company: "Google",
        interviewType: "Mixed",
        difficultyLevel: "Medium",
        duration: "30 Minutes",
        interviewMode: "Text Interview",
    };




    return (
        <div>
           


            <div className='flex justify-between mt-2 rounded-md gap-6 '>



                <div className='w-[75%] shadow-2xl p-3  rounded-md bg-secondary'>

                    {/* step-1 */}
                    <div>

                        <StepText title={step_1_Data.title} step={step_1_Data.step} />
                        <div className='p-2  border-b border-accent'>
                            <ResumeCards />
                        </div>
                    </div>

                    {/* step-2 */}

                    <div className='border-b border-accent mt-3 mb-3 '>

                        <StepText title={step_2_Data.title} step={step_2_Data.step} />
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 '>


                            {
                                step_2_Data.data.map((field, index) => (
                                    <div
                                        key={index}
                                        className="p-2 border-accent"
                                    >
                                        <h1 className="font-semibold text-sm mb-4">
                                            {field.name}
                                        </h1>

                                        <Select>
                                            <SelectTrigger className="w-full rounded-md bg-accent hover:border-primary/50 hover:bg-accent ">
                                                <SelectValue placeholder={`Select ${field.select}`} />
                                            </SelectTrigger>

                                            <SelectContent className="rounded-md p-2">
                                                {field.select_field.map((item, idx) => (
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
                                ))
                            }
                        </div>

                    </div>

                    {/* step-3 */}
                    <div className='border-b border-accent mt-3 mb-3  '>

                        <StepText title={step_3_Data.title} step={step_3_Data.step} />
                        <div className=' grid grid-cols-3 gap-3'>
                            <div className='p-2'>
                                <h1 className="font-semibold text-sm mb-4">{step_3_Data.data[0].name}</h1>
                                <div className='grid grid-cols-3 gap-3'>
                                    {
                                        step_3_Data.data[0].select_field.map((value, index) => {
                                            return (
                                                <div className=' px-3 py-2  rounded-md border flex  gap-3 items-center justify-center cursor-pointer 
                                                transition-all hover:scale-[1.05] hover:border-primary/50 hover:bg-accent'>
                                                    <img src={value.logo} alt="" srcset="" className='h-5 w-5 object-contain' />
                                                    <span className='text-[11px]'>{value.label}</span>
                                                </div>
                                            )

                                        })
                                    }
                                </div>
                                <div className='flex p-2 mt-4  rounded-md gap-3 border items-center justify-center bg-accent hover:border-primary/50 hover:bg-accent'>
                                    <Building2 />
                                    <h4 className='text-sm'>More Companies</h4>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h1 className="font-semibold text-sm mb-4">{step_3_Data.data[1].name}</h1>
                                <div className='grid grid-row-5 gap-2'>
                                    {
                                        step_3_Data.data[1].select_field.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <div className=' px-3 py-2  rounded-md border flex  gap-3 items-center cursor-pointer transition-all
                                                 hover:scale-[1.05] hover:border-primary/50 hover:bg-accent '>
                                                    <Icon className="h-4 w-4 text-primary" />
                                                    <span className='text-[11px]'>{item.label}</span>
                                                </div>
                                            )

                                        })
                                    }
                                </div>

                            </div>
                            <div className='p-2'>
                                <h1 className="font-semibold text-sm mb-4">{step_3_Data.data[2].name}</h1>
                                <div className='grid grid-row-5 gap-2'>
                                    {
                                        step_3_Data.data[2].select_field.map((item, index) => {
                                            const Icon = item.icon;
                                            return (

                                                <div
                                                    key={item.value}
                                                    className={` p-2 rounded-xl border cursor-pointer transition-all
                                                        hover:border-primary/50 hover:bg-accent
                                                     hover:scale-[1.05] ${item.bgColor} ${item.borderColor}`}>
                                                    <div className="flex items-center gap-3">
                                                        <Icon className={`h-4 w-4 ${item.iconColor}`} />

                                                        <div>
                                                            <h3 className="font-sm">
                                                                {item.label}
                                                            </h3>

                                                            <p className="text-xs text-muted-foreground">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );


                                        })
                                    }
                                </div>

                            </div>




                        </div>

                    </div>

                    {/* step-4 & step-5 */}

                    <div>
                        <StepText
                            title={step_4_Data.title}
                            step={step_4_Data.step}
                        />

                        <div className="grid grid-cols-2 gap-6 mt-4">
                            {/* Duration Section */}
                            <div>
                                <h1 className="font-semibold text-sm mb-4">
                                    {step_4_Data.data[0].name}
                                </h1>

                                <div className="grid grid-cols-5 gap-3">
                                    {step_4_Data.data[0].select_field.map((option) => {
                                        const Icon = option.icon;

                                        return (
                                            <div
                                                key={option.value}
                                                className=" border rounded-xl p-3 cursor-pointer hover:bg-accent hover:border-primary/50 
                                                transition-all duration-300 flex flex-col justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Icon className="h-4 w-4 text-primary" />

                                                    <span className="text-[11px] font-medium">
                                                        {option.label}
                                                    </span>
                                                </div>

                                                <p className="text-[10px] text-muted-foreground">
                                                    Minutes
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Interview Mode Section */}
                            <div>
                                <h1 className="font-semibold text-sm mb-4">
                                    {step_4_Data.data[1].name}
                                </h1>

                                <div className="grid grid-cols-3 gap-3">
                                    {step_4_Data.data[1].select_field.map((option) => {
                                        const Icon = option.icon;

                                        return (
                                            <div
                                                key={option.value}
                                                className=" border rounded-xl p-3 cursor-pointer hover:bg-accent   
                                                transition-all duration-300 flex  items-center justify-center gap-2">
                                                <Icon
                                                    className={`h-5 w-5 ${option.iconColor}`}
                                                />

                                                <span className="text-[11px] font-medium text-center">
                                                    {option.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='w-[25%] grid  grid-rows-[73%_20%] gap-4' >
                    <div className="bg- bg-muted  shadow-2xl rounded-md p-2 space-y-2 grid-rows-3 justify-between">

                        <StepText title={step_5_Data.title} step={step_5_Data.step} />

                        <div>
                            <InterviewSummary {...interviewSummary} />
                        </div>

                        <div className="max-w-md">
                            <AIWillPrepare />
                        </div>


                        <div className="space-y-3 bg-accent shadow-2xl p-3 rounded-2xl">
                            <Button
                                className="w-full rounded-md bg-[linear-gradient(0deg,var(--button-from),var(--button-to))] text-white shadow-md 
                                hover:opacity-90"
                                asChild
                            >
                                <NavLink to="/interview">
                                    Start AI Interview
                                </NavLink>
                            </Button>

                            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                <ShieldCheck className="h-4 w-4 text-green-500" />
                                <span>Your data is secure and confidential</span>
                            </div>
                        </div>


                    </div>
                    <AIAssistantCard />
                </div>

            </div>



            <div className="flex items-center gap-3 p-2 rounded-md border border-primary/20 bg-primary/5  mt-5">
                <Sparkles className="h-4 w-4 text-primary  shrink-0" />

                <p className="text-[10px] text-muted-foreground">
                    Your information helps us generate personalized AI interview questions
                    tailored to your role, skills, and experience.
                </p>
            </div>

        </div >
    )
}

export default IinterviewSetupPage
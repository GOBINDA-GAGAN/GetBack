import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { interviewSetupData } from "../constants/interviewSetupPage"
import StepText from '../components/StepText'
import ResumeCards from '../components/ResumeOptions'
import Dropdown from '../components/Dropdown'


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Building2 } from 'lucide-react'

const IinterviewSetupPage = () => {
    const topBar = interviewSetupData;


    const step_1_Data = topBar[0];
    const step_2_Data = topBar[1];
    const step_3_Data = topBar[2];




    return (
        <div>
            {/* setUp step */}
            <div className=' flex justify-between items-center shadow-2xl bg-background rounded-md'>
                {
                    topBar.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between p-2 rounded-md "
                        >
                            <div className="flex items-center gap-2 p-2 rounded-md">
                                <span className="bg-primary h-8 w-8 flex items-center justify-center rounded-bl-2xl rounded-t-2xl rounded-br-sm text-white">
                                    {item.step}
                                </span>

                                <div className="flex flex-col ">
                                    <span className="text-[11px] font-semibold">
                                        {item.title}
                                    </span>

                                    <span className="text-[10px]">
                                        {item.subtitle}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>


            <div className='flex justify-between p-3 mt-2  shadow-2xl rounded-md gap-6'>
                <div className='w-[75%]  rounded-md'>

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
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>


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
                                            <SelectTrigger className="w-full rounded-md">
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
                        <div className=' grid grid-cols-[35%_32%_32%] gap-3'>
                            <div className='p-2'>
                                <h1 className="font-semibold text-sm mb-4">{step_3_Data.data[0].name}</h1>
                                <div className='grid grid-cols-3 gap-3'>
                                    {
                                        step_3_Data.data[0].select_field.map((value, index) => {
                                            return (
                                                <div className=' px-3 py-2  rounded-md border flex  gap-3 items-center justify-center cursor-pointer transition-all hover:scale-[1.05]'>
                                                    <img src={value.logo} alt="" srcset="" className='h-5 w-5 object-contain' />
                                                    <span className='text-[11px]'>{value.label}</span>
                                                </div>
                                            )

                                        })
                                    }
                                </div>
                                <div className='flex p-2 mt-4  rounded-md gap-3 border items-center justify-center'>
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
                                                <div className=' px-3 py-2  rounded-md border flex  gap-3 items-center cursor-pointer transition-all hover:scale-[1.05] '>
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
                                                    className={` p-2 rounded-xl border cursor-pointer transition-all hover:scale-[1.05] ${item.bgColor} ${item.borderColor}`}>
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

                </div>


                <div className='w-[25%] bg-red-500'>review</div>
            </div>





            {/* <Button>
                <NavLink to="/interview">Start AI Interview</NavLink>
            </Button> */}
        </div >
    )
}

export default IinterviewSetupPage
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { interviewSetupData } from "../constants/interviewSetupPage"
import StepText from '../components/StepText'

const IinterviewSetupPage = () => {
    const topBar = interviewSetupData;
    const step_1_Data = topBar[0];

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

            <div className='flex justify-between p-3 mt-2 bg-primary shadow-2xl rounded-md gap-6'>
                <div className='w-[75%] bg-accent rounded-md'>
                    <StepText title={step_1_Data.title} />




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
import React from 'react'

const StepText = ({title,step}) => {
    
    
    return (
        <h1 className='font-semibold'>
            <span className='text-primary'>Step {step}: </span>{title}
        </h1>
    )
}

export default StepText
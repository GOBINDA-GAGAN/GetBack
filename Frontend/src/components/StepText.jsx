import React from 'react'

const StepText = ({title}) => {
    console.log(title);
    
    return (
        <h1 className='font-semibold'>
            <span className='text-primary'>Step 1: </span>{title}
        </h1>
    )
}

export default StepText
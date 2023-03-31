import React, { useEffect, useState } from 'react';

const SpentTime = ({readTime}) => {
    const [spentTime , setSpentTime] = useState(0) ;
    useEffect(() =>{
        const spentTime = localStorage.getItem('proCafeBlogReadTime') ;
        if(!spentTime){
            setSpentTime(0) ;
        }
        else{
            setSpentTime(spentTime) ;
        }
    } , [readTime])

    return (
        <div className='w-full border border-purple-600 bg-purple-50 rounded-lg'>
            <h1 className='text-center font-bold text-2xl text-purple-600 p-3'>Spent time on read: {spentTime} min</h1>
        </div>
    );
};

export default SpentTime;
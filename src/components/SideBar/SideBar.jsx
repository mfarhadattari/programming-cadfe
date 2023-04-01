import React from 'react';
import SpentTime from '../SpentTime/SpentTime';

const SideBar = ({readTime}) => {
    return (
        <div className='lg:col-span-1 border mt-5 p-5 h-fit'>
            <SpentTime readTime={readTime}></SpentTime>
        </div>
    );
};

export default SideBar;
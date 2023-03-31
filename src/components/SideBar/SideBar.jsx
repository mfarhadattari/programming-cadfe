import React from 'react';
import SpentTime from '../SpentTime/SpentTime';

const SideBar = () => {
    return (
        <div className='col-span-1 border mt-5 p-5 h-fit'>
            <SpentTime></SpentTime>
        </div>
    );
};

export default SideBar;
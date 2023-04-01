import React from 'react';
import SpentTime from '../SpentTime/SpentTime';
import Bookmarks from '../Bookmarks/Bookmarks';

const SideBar = ({readTime , bookmarkPosts}) => {
    return (
        <div className='lg:col-span-1 border mt-5 p-5 h-fit'>
            <SpentTime readTime={readTime}></SpentTime>
            <Bookmarks bookmarkPosts = {bookmarkPosts}></Bookmarks>
        </div>
    );
};

export default SideBar;
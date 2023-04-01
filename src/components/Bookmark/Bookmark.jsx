import React from 'react';

const Bookmark = ({post}) => {
    // console.log(post)
    return (
        <div className='p-5 bg-white my-4 rounded-lg border'>
            <h1 className='font-semibold text-lg'>{post.postTitle}</h1>
        </div>
    );
};

export default Bookmark;
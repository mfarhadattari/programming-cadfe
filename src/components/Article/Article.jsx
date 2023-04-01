import React from 'react';

const Article = ({article}) => {
    const {articleId , articleTitle , articleBody} = article ;
    return (
        <div className='border p-5 rounded-lg'>
            <h1 className='font-bold text-2xl'>Question: {articleTitle}</h1>
            <p className='text-lg font-medium'>Answer: {articleBody}</p>
        </div>
    );
};

export default Article;
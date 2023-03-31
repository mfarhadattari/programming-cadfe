import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Post = ({ post , readTimeCounter}) => {
  const {
    postId,
    author,
    authorProfile,
    postTitle,
    thumbnail,
    published,
    readTime,
    hashTag,
  } = post;
  return (
    <div className="border w-full h-[800px] my-5">
      {/* -------------Post thumbnail start------------ */}
      <img src={thumbnail} alt="" className="w-full h-[450px]" />
      {/* -------------Post thumbnail end------------ */}

      {/* ---------------post info start------------------ */}
      <div className=" p-5">
        <div className="flex justify-between items-center">
          {/* ----------- author info ---------------- */}
          <div className="flex items-center gap-5">
            <div className="h-[60px] w-[60px] rounded-full border flex justify-center">
              <img src={authorProfile} alt="" className="rounded-full w-full" />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-black">{author}</h1>
              <p>{published}</p>
            </div>
          </div>

          {/* ------------read time info --------------- */}
          <div className="flex items-center gap-5">
            <h1>{readTime} min read</h1>
            <button>
              <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        {/* ---------post title------------- */}
        <h1 className="font-bold text-5xl my-4">{postTitle}</h1>

        {/* ----------post hash tag start ------------- */}
        <div className="flex gap-3 my-5">
          {hashTag.map((tag) => (
            <a key={tag}>#{tag}</a>
          ))}
        </div>
        {/* -----------post hash tag end ---------*/}

        {/* mark as read btn */}
        <button className="underline text-purple-600 text-xl font-semibold" onClick={() => readTimeCounter(readTime)}>
          Mark as Read
        </button>

      </div>
      {/* ---------------post info end ------------------ */}
    </div>
  );
};

export default Post;

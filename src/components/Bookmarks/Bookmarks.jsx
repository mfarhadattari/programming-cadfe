import React, { useEffect } from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarkPosts }) => {
  // useEffect()
  // console.log(bookmarkPosts)
  return (
    <div className="border rounded-lg mt-5 py-5 bg-yellow-50">
      <h1 className="font-semibold text-2xl text-center">
        Bookmarked Blogs: {bookmarkPosts.length}
      </h1>
      <div className="mt-10 p-5">
        {bookmarkPosts.map((post) => (
          <Bookmark post={post} key={post.postId}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;

import React, { useState } from "react";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";

const PostsAndSideBarContainer = () => {
  const [readTime, setReadTime] = useState(0);
  const readTimeCounter = (readTime) => {
    // console.log(readTime)
    const previousReadTime = localStorage.getItem("proCafeBlogReadTime");
    if (!previousReadTime) {
      localStorage.setItem("proCafeBlogReadTime", readTime);
      setReadTime(readTime);
    } else {
      const newTime = parseInt(previousReadTime) + readTime;
      localStorage.setItem("proCafeBlogReadTime", newTime);
      setReadTime(newTime);
    }
  };

  const [bookmarkPosts , setBookmarkPosts] = useState([])
  // const addedPost = []
  const addToBookmark = (post) =>{
    const newPost = [...bookmarkPosts , post]
    setBookmarkPosts(newPost)
  }
  // console.log(bookmarkPosts)

  return (
    <section className="container mx-auto grid gap-5 grid-cols-1 lg:grid-cols-3">
      <Posts readTimeCounter={readTimeCounter} addToBookmark={addToBookmark}></Posts>
      <SideBar readTime={readTime} bookmarkPosts={bookmarkPosts}></SideBar>
    </section>
  );
};

export default PostsAndSideBarContainer;

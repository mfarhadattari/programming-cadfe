import React, { useState } from "react";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";

const PostsAndSideBarContainer = () => {
  const [readTime, setReadTime] = useState(0);
  const readTimeCounter = (readTime) => {
    // console.log(readTime)
    const previousReadTime = localStorage.getItem("readTime");
    if (!previousReadTime) {
      localStorage.setItem("readTime", readTime);
      setReadTime(readTime);
    } else {
      const newTime = parseInt(previousReadTime) + readTime;
      localStorage.setItem("readTime", newTime);
      setReadTime(newTime);
    }
  };

  return (
    <section className="container gap-5 mx-auto grid grid-cols-3">
      <Posts readTimeCounter={readTimeCounter}></Posts>
      <SideBar readTime={readTime}></SideBar>
    </section>
  );
};

export default PostsAndSideBarContainer;

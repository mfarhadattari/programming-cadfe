import React, { useState } from "react";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostsAndSideBarContainer = () => {
  const [readTime, setReadTime] = useState(0);
  const readTimeCounter = (readTime) => {
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

  /* -----------------react toast------------------ */
  const warning = () => toast.warn(`Already Added!`);

  /*-------------bookmark btn---------------  */
  const [bookmarkPosts, setBookmarkPosts] = useState([]);
  const addToBookmark = (post) => {
    const alreadyAdded = bookmarkPosts.find((pst) => pst === post);
    if (alreadyAdded) {
      warning();
      return;
    }
    const newPost = [...bookmarkPosts, post];
    setBookmarkPosts(newPost);
  };

  return (
    <section className="container mx-auto grid gap-5 grid-cols-1 lg:grid-cols-3">
      <Posts
        readTimeCounter={readTimeCounter}
        addToBookmark={addToBookmark}
      ></Posts>
      <SideBar readTime={readTime} bookmarkPosts={bookmarkPosts}></SideBar>

      {/*------------------ toast --------------------------- */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default PostsAndSideBarContainer;

import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = ({readTimeCounter, addToBookmark}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);


  return (
    <div className="lg:col-span-2">
        {
            posts.map(post => <Post key={post.postId} post={post} readTimeCounter = {readTimeCounter} addToBookmark={addToBookmark}></Post>)
        }
    </div>
    );
};

export default Posts;

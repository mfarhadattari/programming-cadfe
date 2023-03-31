import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
//   console.log(posts)

  return (
    <div className="col-span-2">
        {
            posts.map(post => <Post key={post.postId} post={post}></Post>)
        }
    </div>
    );
};

export default Posts;

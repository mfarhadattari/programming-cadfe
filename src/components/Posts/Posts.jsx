import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
        
    </div>
    );
};

export default Posts;

import React from "react";

import PostsAndSideBarContainer from "../PostsAndSideBarContainer/PostsAndSideBarContainer";
import Articles from "../Articles/Articles";

const Main = () => {
  return (
    <div className="mt-10">
      <PostsAndSideBarContainer></PostsAndSideBarContainer>
      <Articles></Articles>
    </div>
  );
};

export default Main;

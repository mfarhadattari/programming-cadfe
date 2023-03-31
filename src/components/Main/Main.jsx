import React from "react";
import Posts from "../Posts/Posts";

const Main = () => {
  return (
    <div className="mt-10">
      <section className="container mx-auto grid grid-cols-3">
        <Posts></Posts>
      </section>
    </div>
  );
};

export default Main;

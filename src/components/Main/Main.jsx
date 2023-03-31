import React from "react";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";

const Main = () => {
  return (
    <div className="mt-10">
      <section className="container gap-5 mx-auto grid grid-cols-3">
        <Posts></Posts>
        <SideBar></SideBar>
      </section>
    </div>
  );
};

export default Main;

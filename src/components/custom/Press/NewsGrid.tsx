import React from "react";
import SingleNews from "./SingleNews";
import { BlogData } from "@/data/data";

const NewsGrid = () => {
  return (
    <div className="py-5 px-5 grid gap-5 lg:grid-cols-4 lg:px-10 ">
      {BlogData.map((blog) => (
        <SingleNews key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default NewsGrid;

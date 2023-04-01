import React, { useEffect, useState } from "react";
import Article from "../Article/Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  console.log(articles);
  return (
    <article className="container mx-auto my-5 font-bold">
      <h1 className="text-5xl text-center">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {articles.map((article) => (
          <Article key={article.articleId} article={article}></Article>
        ))}
      </div>
    </article>
  );
};

export default Articles;

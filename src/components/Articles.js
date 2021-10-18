import { useState, useEffect } from "react";
function Articles(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedArticles, setLoadingArticles] = useState([]);
  useEffect(() => {
        setIsLoading(true);
    fetch("url")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadingArticles(data);
      });
  }, []);

  if (isLoading) {
    return <div><p>Loading..</p></div>;
  } 
  return (
    <div>
      (
      {loadedArticles.map((article) => (
        <article
          key={article.id}
          title={article.title}
          content={article.content}
          image={article.image}
        />
      ))}
      )
    </div>
  );
}
export default Articles;

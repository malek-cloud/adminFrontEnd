import { useState, useEffect,useContext } from "react";
import Article from "./Article";
import  AuthContext  from '../context/authContext';
//import currentUser from '../hooks/currentEmployee'
function Articles(props) {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useContext(AuthContext);
  const [loadedArticles, setLoadingArticles] = useState([]);
  //const user = currentUser() ;
  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(`${process.env.REACT_APP_BACKEND_URL}posts`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.posts);
          setLoadingArticles(data.posts.reverse());
          setIsLoading(false);
          console.log(loadedArticles);
          console.log("currentUser houwa : " + auth.EmployeeId);
        });
    } catch (err) {} ;
   
  
}, []);


  if (isLoading) {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  }
  return loadedArticles.length === 0 ? (
    <div>No articles yet</div>
  ) : (
    <div>
      {loadedArticles.map((article) => (
        <Article
          key={article._id}
          nom={auth.EmployeeId.nom}
          prenom={auth.EmployeeId.prenom}
          title={article.title}
          content={article.content}
          // image={article.image}
        />
      ))}
    </div>
  );
}
export default Articles;

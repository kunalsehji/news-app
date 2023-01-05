import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/search";
import axios from "axios";
// import Guardian from "guardian-js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  // Code is breaking after using guardian api. Removed it from package.json
  // const guardian = new Guardian(process.env.REACT_APP_API_KEY, false);

  const fetchArticles = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/search?api-key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}`
    );

    console.log(response);
    setArticles(response.data.response.results);
  };

  useEffect(() => {
    searchTerm && fetchArticles();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <h1>News App</h1>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      {articles.map((item) => (
        <div>
          <a href={item.webUrl} target="_blank">
            {item.webTitle}
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;

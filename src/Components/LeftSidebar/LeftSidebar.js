import React, { useEffect, useState } from 'react';
import "./LeftSidebar.css";
import SearchedPost from './SearchedPost';
import SearchedPostResult from './SearchedPostResult';

function LeftSidebar({ setSelectedCard }) {
  const [data, setData] = useState([]);

  const [results, setResults] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/comments";
  const fetchPost = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="left-container">
      <SearchedPost setResults={setResults} />
      {results.length === 0 ? (
        <SearchedPostResult results={data} setSelectedCard={setSelectedCard} />
      ) : (
        <SearchedPostResult
          results={results}
          setSelectedCard={setSelectedCard}
        />
      )}
    </div>
  );
}

export default LeftSidebar
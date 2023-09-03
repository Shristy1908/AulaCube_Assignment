import React from 'react';
import "./SearchedPostResult.css";

function SearchedPostResult({ results, setSelectedCard }) {

  const handlePostClick = (postid) => {
    const selectedComment = results.find((post) => post.id === postid);
    setSelectedCard(selectedComment);
  };

  return (
    <>
      <div className="post-container">
        {results.map((data, index) => {
          return (
            <div
              className="posts"
              key={index}
              onClick={() => handlePostClick(data.id)}
            >
              <h2>PostId: {data.postId}</h2>
              <p>
                <strong>Post title:</strong> {data.name}
              </p>
              <p>
                <strong>Posted By:</strong> {data.email}
              </p>
              <p>
                <strong>Comment:</strong> {data.body}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchedPostResult
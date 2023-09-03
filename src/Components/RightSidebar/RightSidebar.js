import React from 'react';
import "./RightSidebar.css";

function RightSidebar({ selectedCard }) {

  console.log(selectedCard)

  return (
    <div className="rightside-container">
      <h1>Comments Of The Post</h1>
      <hr />
      <div className="comments-container">
        {selectedCard && (
          <div className="selected-post">
            <h2>Comments</h2>
            <p>{selectedCard.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSidebar
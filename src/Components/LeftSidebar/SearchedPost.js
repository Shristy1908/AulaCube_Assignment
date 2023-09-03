import React,{useState} from 'react';
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./SearchedPost.css";

function SearchedPost({setResults}) {

    const [input, setInput] = useState('');

    const url = "https://jsonplaceholder.typicode.com/comments";

    const fetchPost = (value) =>{
        return fetch(url)
        .then((res)=> res.json())
        .then((json)=>{
             const results = json.filter((user) => {
               return (
                value &&
                user.postId &&
                user.postId.toString().includes(value)
               );
             });
           setResults(results);
              
        })
    }

    const handleChange=(value)=>{
        setInput(value);
        fetchPost(value);
    }

  return (
    <>
      <div className="input-container">
        <IconContext.Provider value={{ className: "searchIcon" }}>
          <BiSearch />
        </IconContext.Provider>
        <input
          type="text"
          placeholder="Enter PostId..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export default SearchedPost
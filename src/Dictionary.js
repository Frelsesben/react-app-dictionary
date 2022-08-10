import React, { useState } from "react";
import "./styles.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} 👀`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for any word.."
          onChange={updateKeyword}
        />
        <input type="submit" value="🔎" />
      </form>
    </div>
  );
}

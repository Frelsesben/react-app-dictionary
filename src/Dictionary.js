import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} 👀`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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

import React from "react";
import "./styles.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <h3>Synonyms</h3>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
        <hr />
      </div>
    );
  } else {
    return null;
  }
}

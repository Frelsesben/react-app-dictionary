import React from "react";
import "./styles.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <b>{definition.definition}</b>
              <br />
              <i>{definition.example}</i>
            </p>
          </div>
        );
      })}
    </div>
  );
}

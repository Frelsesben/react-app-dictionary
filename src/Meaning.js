import React from "react";
import "./styles.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <b>{props.meaning.definitions[0].definition}</b>
        <br />
        <i>{props.meaning.definitions[0].example}</i>
        <hr />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}

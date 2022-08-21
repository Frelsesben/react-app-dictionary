import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./styles.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_my8voqwy.json"
        background="transparent"
        speed="0.5"
        id="animation"
        loop
        autoplay
      ></lottie-player>
    );
  }
}

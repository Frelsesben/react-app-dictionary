import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./styles.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div>
        <ReactAudioPlayer
          className="audio-player"
          src={props.phonetic.audio}
          autoPlay={false}
          controls={true}
        />{" "}
        <br /> {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}

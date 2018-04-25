import React from "react";

const Song = (props) =>
        <React.Fragment>
          <span className="image"><img src={props.image} alt={props.title}/></span>
          <span className="tune"><a href={props.tune} className="button">Play</a></span>
          <span className="position">{props.position}</span>
          <span className="title">{props.title}</span>
          <span className="artist">{props.artist}</span>
        </React.Fragment>

export default Song;

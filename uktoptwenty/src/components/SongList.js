import React from 'react';
import Song from "./Song";

const SongList = (props) => {
  const songs = props.songs.map((song, index) => {
    return (
      <ul>
        <Song key={index} title={song["im:name"].label} artist={song["im:artist"].label}/>
      </ul>
    )
  });

  return (
    <React.Fragment>
      {songs}
    </React.Fragment>
  )
}

export default SongList;

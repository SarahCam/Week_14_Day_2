import React from 'react';
import Song from "./Song";

const SongList = (props) => {
  let chartPosition = 0;
  const songs = props.songs.map((song, index) => {
    chartPosition += 1;
    return (
      <li key={index}>
        <Song
          position={chartPosition}
          title={song["im:name"].label}
          artist={song["im:artist"].label}
          image={song["im:image"][0].label}
        />
      </li>
    )
  });

  return (
    <ul>
      {songs}
    </ul>
  )
}

export default SongList;

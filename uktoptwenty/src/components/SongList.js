import React from 'react';

const SongList = (props) => {
  const songs = props.songs.map((song, index) => {
    return <li value={index} key={index}>{song["im:name"].label}</li>
  });


  return (
    <ul id="song-list">
      {songs}
    </ul>
  )
}

export default SongList;

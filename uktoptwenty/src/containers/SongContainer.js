import React from "react";

class SongContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
  }

  render(){
    return (
      <h1>Song Container</h1>
    )
  }
}

export default SongContainer;

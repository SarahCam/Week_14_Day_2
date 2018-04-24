import React from "react";
import Heading from "../components/Heading";
import SongList from "../components/SongList";
import Footer from "../components/Footer";

class SongContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")     // gives us a 'promise'
      .then((response) => response.json())                              // gives us another 'promise'
      .then(json => this.setState({songs: json.feed.entry}));
  }

  render(){
    return (
      <React.Fragment>
        <Heading />
        <SongList
          songs={this.state.songs}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default SongContainer;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// TODO: replace this with env variable
const API_KEY = process.env.API;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

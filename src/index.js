import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

// TODO: replace this with env variable
const API_KEY = 'AIzaSyATjBoSbI7q-QahnXtT63pa0p1Zdw-40cc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    const { videos } = this.state;

    return (
      <div>
        <SearchBar />
        <VideoList videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

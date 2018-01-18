import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA5tXYUFCSbNd941qOhImLkdlfqLEM--EU';


// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    // Execute a YouTube search; pass API key and search term, run function with returned data
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (data) => {
      this.setState({ videos: data });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

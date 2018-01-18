import React, { Component } from 'react';

// Create a class component extending React.Component
class SearchBar extends Component {
  // Every class component needs a render() method
  render() {
    // Every render() method must return something
    return (
      <input onChange={(event) => console.log(event.target.value)} />
    )
  }
}

// Export component
export default SearchBar;

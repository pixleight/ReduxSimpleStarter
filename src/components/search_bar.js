import React, { Component } from 'react';

// Create a class component extending React.Component
class SearchBar extends Component {
  // constructor() is automatically called whenever a new instance of component is created
  // Used for setup
  constructor(props) {
    // always call super()
    super(props);

    // initialize state, create new object and assign to this.state
    this.state = { term: '' }
  }

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

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
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  // Event handler for onChange
  onInputChange(term) {
    // Set state to the current input value
    this.setState({term});
    // Execute search in parent component
    this.props.onSearchTermChange(term);
  }
}

// Export component
export default SearchBar;

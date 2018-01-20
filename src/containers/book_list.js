import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// The 'glue' between React and Reduc
// Take application state as an argument...
function mapStateToProps(state) {
  // ...Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// Connect the state mapping and component, and export as container
export default connect(mapStateToProps)(BookList);

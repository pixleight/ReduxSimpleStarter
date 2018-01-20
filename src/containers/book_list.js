import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action
import { selectBook } from '../actions/index';
// bind action to make it flow through reducers
import { bindActionCreators } from 'redux';

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

// Anything returned from this function will end up as props on the BookList container:
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all our reducers:
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container -- it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

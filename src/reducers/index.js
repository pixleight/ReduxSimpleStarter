import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Telling Redux how to create the application state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;

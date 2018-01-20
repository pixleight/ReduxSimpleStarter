// An action is a function
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action -- an object with a type property and sometimes contains a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

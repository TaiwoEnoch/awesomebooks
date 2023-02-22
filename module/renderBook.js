const titleInputEl = document.getElementById('title-input');
const authorInputEl = document.getElementById('author-input');
const formEl = document.getElementById('form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInputEl.value;
  const author = authorInputEl.value;
  const removeIndex = bookCollection.collectionData.length;
  const book = { title, author, bookID: removeIndex };
  bookCollection.addBook(book);
  renderBooks(bookCollection.collectionData);
});

export default addbook
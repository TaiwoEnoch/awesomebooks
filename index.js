const titleInputEl = document.getElementById('title-input');
const authorInputEl = document.getElementById('author-input');
const formEl = document.getElementById('form');
const collectionsSectionEl = document.getElementById('books-collection');

const removeButtons = [];

class BookCollection {
  constructor() {
    this.collectionData = JSON.parse(window.localStorage.getItem('collectionArray')) || [];
  }

  addBook(book) {
    this.collectionData.push(book);
    this.updateStorage();
  }

  removeBook(id) {
    this.collectionData = this.collectionData.filter((book) => book.bookID !== id);
    this.collectionData.forEach((book, index) => { book.bookID = index; });
    this.updateStorage();
  }

  updateStorage() {
    window.localStorage.setItem('collectionArray', JSON.stringify(this.collectionData));
  }
}

const bookCollection = new BookCollection();

const renderBooks = (data) => {
  collectionsSectionEl.innerHTML = '';
  data.forEach((book, index) => {
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book-entry');
    const bookTitle = document.createElement('p');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = book.author;
    removeButtons[index] = document.createElement('button');
    removeButtons[index].classList.add('remove-button');
    removeButtons[index].textContent = 'Remove';
    removeButtons[index].dataset.id = book.bookID;
    bookEntry.append(bookTitle, bookAuthor, removeButtons[index]);
    collectionsSectionEl.appendChild(bookEntry);
  });
  removeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      bookCollection.removeBook(+e.target.dataset.id);
      renderBooks(bookCollection.collectionData);
    });
  });
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInputEl.value;
  const author = authorInputEl.value;
  const removeIndex = bookCollection.collectionData.length;
  const book = { title, author, bookID: removeIndex };
  bookCollection.addBook(book);
  renderBooks(bookCollection.collectionData);
});

// const removeBook = (id) => {
//   collectionData = collectionData.filter((book) => book.bookID !== id);
//   collectionData.forEach((book, index) => { book.bookID = index; });
//   renderBooks(collectionData);
//   window.localStorage.setItem('collectionArray', JSON.stringify(collectionData));
// };

// removeButtons.forEach((button) => {
//   console.log(button);
// });

// renderBooks(bookCollection);
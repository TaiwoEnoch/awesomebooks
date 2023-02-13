const titleInputEl = document.getElementById('title-input');
const authorInputEl = document.getElementById('author-input');
const formEl = document.getElementById('form');
const collectionsSectionEl = document.getElementById('books-collection');

let collectionData =
  JSON.parse(window.localStorage.getItem('collectionArray')) || [];
console.log(collectionData);
const removeButtons = [];

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = titleInputEl.value;
  const author = authorInputEl.value;
  const removeIndex = collectionData.length;
  const book = { title: title, author: author, bookID: removeIndex };
  addBook(book);
  renderBooks(collectionData);
});

const addBook = (book) => {
  collectionData.push(book);
  window.localStorage.setItem('collectionArray', JSON.stringify(collectionData));
};

const removeBook = (a) => {
  console.log(collectionData, 'before');
  collectionData = collectionData.filter((book) => book.bookID !== a);
  console.log(collectionData, 'after')
  renderBooks(collectionData);
  window.localStorage.setItem('collectionArray', JSON.stringify(collectionData));
};

const renderBooks = (collectionData) => {
  console.log('rendering books');
  collectionsSectionEl.innerHTML = '';
  collectionData.forEach((book, index) => {
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

  removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const id = +event.target.dataset.id;
      removeBook(id);
    });

  });
};

renderBooks(collectionData);

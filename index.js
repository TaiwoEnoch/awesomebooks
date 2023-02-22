import bookCollection from './module/bookCollection.js';
import renderBooks from './module/renderBook.js';
import { DateTime } from './luxon.js';

const titleInputEl = document.getElementById('title-input');
const authorInputEl = document.getElementById('author-input');
const formEl = document.getElementById('form');
const contactSection = document.querySelector('.contact-section');
const collectionsSectionEl = document.getElementById('books-collection');
const bookSectionEl = document.getElementById('books-section');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInputEl.value;
  const author = authorInputEl.value;
  const removeIndex = bookCollection.collectionData.length;
  const book = { title, author, bookID: removeIndex };
  bookCollection.addBook(book);
  console.log(bookCollection.collectionData);
  renderBooks(collectionsSectionEl, bookCollection);
});

renderBooks(collectionsSectionEl, bookCollection);

// display the books list when click the button "List"
const listBtn = document.getElementById('list-books');
listBtn.addEventListener('click', () => {
  bookSectionEl.style.display = 'block';
  formEl.style.display = 'none';
  contactSection.style.display = 'none';
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.querySelector('.add-new-btn');
addNewBtn.addEventListener('click', () => {
  formEl.style.display = 'flex';
  contactSection.style.display = 'none';
  bookSectionEl.style.display = 'none';
});

// display the  Contact section when click the button "Contact"
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
  contactSection.style.display = 'flex';
  formEl.style.display = 'none';
  bookSectionEl.style.display = 'none';
});

setInterval(() => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('set-date').innerHTML = date;
}, 1000);

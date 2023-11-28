// Import the bookCollection instance and renderBooks function from their respective modules
import bookCollection from './module/bookCollection.js';
import renderBooks from './module/renderBook.js';

// Import the DateTime class from the Luxon library for accurate date and time handling
import { DateTime } from './luxon.js';

// Get references to various HTML elements using their IDs or classes
const titleInputEl = document.getElementById('title-input');
const authorInputEl = document.getElementById('author-input');
const formEl = document.getElementById('form');
const contactSection = document.querySelector('.contact-section');
const collectionsSectionEl = document.getElementById('books-collection');
const bookSectionEl = document.getElementById('books-section');

// Event listener for the form submission to add a new book to the collection
formEl.addEventListener('submit', (e) => {
  // Prevent the form from default submission behavior
  e.preventDefault();

  // Retrieve the values of the title and author input fields
  const title = titleInputEl.value;
  const author = authorInputEl.value;

  // Create a book object with the input values and a unique bookID
  const removeIndex = bookCollection.collectionData.length;
  const book = { title, author, bookID: removeIndex };

  // Add the new book to the collection and re-render the books
  bookCollection.addBook(book);
  renderBooks(collectionsSectionEl, bookCollection);

  // Clear the input fields after adding the book respectfully
  titleInputEl.value = '';
  authorInputEl.value = '';
});

// Initial rendering of the books when the page loads
renderBooks(collectionsSectionEl, bookCollection);

// Event listener to display the books list when the "List" button is clicked
const listBtn = document.getElementById('list-books');
listBtn.addEventListener('click', () => {
  bookSectionEl.style.display = 'block';
  formEl.style.display = 'none';
  contactSection.style.display = 'none';
});

// Event listener to display the Add book form when the "Add new" button is clicked
const addNewBtn = document.querySelector('.add-new-btn');
addNewBtn.addEventListener('click', () => {
  formEl.style.display = 'flex';
  contactSection.style.display = 'none';
  bookSectionEl.style.display = 'none';
});

// Event listener to display the Contact section when the "Contact" button is clicked
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
  contactSection.style.display = 'flex';
  formEl.style.display = 'none';
  bookSectionEl.style.display = 'none';
});

// Update the current date and time every second using Luxon's DateTime class
setInterval(() => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

  // Update the HTML element with the current date and time
  document.getElementById('set-date').innerHTML = date;
}, 1000);
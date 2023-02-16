const titleInputEl = document.getElementById('title-input');
const authorInputEl = document.getElementById('author-input');
const formEl = document.getElementById('form');
const contactSection = document.querySelector('.contact-section');
const collectionsSectionEl = document.getElementById('books-collection');
const bookSectionEl = document.getElementById('books-section');

class BookCollection {
  constructor() {
    this.collectionData = JSON.parse(window.localStorage.getItem('collectionArray')) || [];
    this.removeButtons = [];
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
    const bookInfo = document.createElement('span');
    bookInfo.classList.add('book-info');
    bookInfo.textContent = `"${book.title}" by ${book.author}`;
    bookCollection.removeButtons[index] = document.createElement('button');
    bookCollection.removeButtons[index].classList.add('remove-button');
    bookCollection.removeButtons[index].textContent = 'Remove';
    bookCollection.removeButtons[index].dataset.id = book.bookID;
    bookEntry.append(bookInfo, bookCollection.removeButtons[index]);
    collectionsSectionEl.appendChild(bookEntry);
  });

  bookCollection.removeButtons.forEach((button) => {
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

renderBooks(bookCollection.collectionData);

// display the books list when click the button "List"
const listBtn = document.querySelector('.listBtn');
listBtn.addEventListener('click', () => {
  bookSectionEl.style.display = 'block';
  formEl.style.display = 'none';
  contactSection.style.display = 'none';
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.querySelector('.add-new-btn');
addNewBtn.addEventListener('click', () => {
  formEl.style.display = 'block';
  contactSection.style.display = 'none';
  bookSectionEl.style.display = 'none';
});

// display the  Contact section when click the button "Contact"
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
  contactSection.style.display = 'block';
  formEl.style.display = 'none';
  bookSectionEl.style.display = 'none';
});

setInterval(() => {
  const currentDate = new Date().toLocaleString();
  document.getElementById('set-date').innerHTML = currentDate;
}, 1000);

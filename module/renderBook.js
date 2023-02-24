const renderBooks = (collectionsSectionEl, bookCollection) => {
  collectionsSectionEl.innerHTML = '';
  bookCollection.collectionData.forEach((book, index) => {
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
      renderBooks(collectionsSectionEl, bookCollection);
    });
  });
};

export default renderBooks;
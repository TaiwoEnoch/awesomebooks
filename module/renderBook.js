// Function to render the books in the provided collections section element based on the given bookCollection
const renderBooks = (collectionsSectionEl, bookCollection) => {
  // Clear the existing content in the collections section element
  collectionsSectionEl.innerHTML = '';

  // Loop through each book in the collectionData array of the bookCollection
  bookCollection.collectionData.forEach((book, index) => {
    // Create a div element for each book entry
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book-entry');

    // Create a span element to display the book information
    const bookInfo = document.createElement('span');
    bookInfo.classList.add('book-info');
    bookInfo.textContent = `"${book.title}" by ${book.author}`;

    // Create a remove button for each book and configure its properties
    bookCollection.removeButtons[index] = document.createElement('button');
    bookCollection.removeButtons[index].classList.add('remove-button');
    bookCollection.removeButtons[index].textContent = 'Remove';
    bookCollection.removeButtons[index].dataset.id = book.bookID;

    // Append the book information and remove button to the book entry div
    bookEntry.append(bookInfo, bookCollection.removeButtons[index]);

    // Append the book entry div to the collections section element
    collectionsSectionEl.appendChild(bookEntry);
  });

  // Attach event listeners to each remove button for dynamic removal of books
  bookCollection.removeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // Remove the book based on its ID when the remove button is clicked
      bookCollection.removeBook(+e.target.dataset.id);
      // Re-render the books after removal to update the UI
      renderBooks(collectionsSectionEl, bookCollection);
    });
  });
};

// Export the renderBooks function for use in other parts of the application
export default renderBooks;
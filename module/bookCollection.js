// Class definition for managing a collection of books
class BookCollection {
  // Constructor initializes the collectionData array from local storage or an empty array if no data is stored
  constructor() {
    this.collectionData = JSON.parse(window.localStorage.getItem('collectionArray')) || [];
    // Array to store references to remove buttons associated with each book
    this.removeButtons = [];
  }

  // Method to add a book to the collection
  addBook(book) {
    // Push the new book to the collectionData array
    this.collectionData.push(book);
    // Update the local storage to reflect the changes
    this.updateStorage();
  }

  // Method to remove a book from the collection based on its ID
  removeBook(id) {
    // Use the filter method to create a new array excluding the book with the specified ID
    this.collectionData = this.collectionData.filter((book) => book.bookID !== id);
    // Update the bookIDs in the remaining books to maintain a consistent order
    this.collectionData.forEach((book, index) => { book.bookID = index; });
    // Update the local storage to reflect the changes
    this.updateStorage();
  }

  // Method to update the local storage with the current collectionData
  updateStorage() {
    window.localStorage.setItem('collectionArray', JSON.stringify(this.collectionData));
  }
}

// Create an instance of the BookCollection class to manage the book collection
const bookCollection = new BookCollection();

// Export the bookCollection instance to make it accessible in other parts of the application
export default bookCollection;
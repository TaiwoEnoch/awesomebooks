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

export default bookCollection;
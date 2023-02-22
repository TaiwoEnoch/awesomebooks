const contactSection = document.querySelector('.contact-section');
const bookSectionEl = document.getElementById('books-section');
const formEl = document.getElementById('form');

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

export default navigation
const addBook = document.getElementById('addBookBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const form = document.getElementById('form');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, read status is ${this.read}`
}


addBook.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
})

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
})

form.onsubmit = (e) => {
    e.preventDefault();
    addBookToLibrary();
}

function addBookToLibrary() {
    let book = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked ? true : false
    )

    myLibrary.push(book);
    document.forms[0].reset();
    modal.classList.remove('active');
    overlay.classList.remove('active');
    displayBooks(book);
}

function displayBooks(book) {
    let rStatus, cssClass;
    book.read === true ? (rStatus = 'Read', cssClass = 'green-btn') : (rStatus = 'Not read', cssClass = 'red-btn');

    document.querySelector('.books').innerHTML +=
        `<div class="book" id="book-${myLibrary.indexOf(book)}">
        <p>"${book.title}"</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <button id="rBtn" class="button ${cssClass}" onclick="toggleButton()">${rStatus}</button>
        <button class="button grey-btn" data-id="${myLibrary.indexOf(book)}" onclick="removeBook()">Remove</button>
        </div>`;
}

function removeBook(){
    let index = event.target.getAttribute('data-id');
    myLibrary.splice(index,1);
    document.getElementById(`book-${index}`).remove();
}
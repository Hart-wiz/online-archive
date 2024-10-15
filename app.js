const myLibrary = [];

const bookTitle = document.getElementById("title").value;
const bookAuthor = document.getElementById("author").value;
const bookPages = document.getElementById("pages").value;

// function constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const newbook = new Book(bookTitle, bookAuthor, bookPages);

function addBookToLibrary(newbook) {
  myLibrary.push(newbook);
  displayBooks();
}

// function to display all books in the library

function displayBooks() {
  const librarydiv = document.querySelector(".library");
  librarydiv.innerHTML = " "; //clears existing list before displaying updated list

  myLibrary.forEach(function (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML =
      ((<h3>${book.title}</h3>),
      (<p>author:${book.author}</p>),
      (<p>pages:${book.pages}</p>));

    librarydiv.appendChild(bookCard);
  });
}

// searching the library for the books with their details

// add book buttons
function addBook() {
  document.querySelector("form").style.display = "none";
  document.querySelector("#display-library").style.display = "flex";
  addBookToLibrary();
  displayBooks();
}

function backToForm() {
  document.querySelector("form").style.display = "flex";
  document.querySelector("#display-library").style.display = "none";
}
backToForm();

myLibrary.push("john");

const myLibrary = [];

// function to display all books in the library
function displayBooks() {
  const librarydiv = document.querySelector(".library");
  librarydiv.innerHTML = " "; //clears existing list before displaying updated list

  myLibrary.forEach(function (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `<section><h3>${book.title}</h3>
    <p>author:${book.author}</p>
    <p>pages:${book.pages}</p></section>`;

    librarydiv.appendChild(bookCard);
  });
}

// add book to library function
function addBookToLibrary(event) {
  event.preventDefault();
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPages = document.getElementById("pages").value;

  // function constructor
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  const newBook = new Book(bookTitle, bookAuthor, bookPages);
  myLibrary.push(newBook);

  document.querySelector("form").style.display = "none";
  document.querySelector("#display-library").style.display = "flex";
  displayBooks();
}

// function back to the donation form from the lib display
function backToForm() {
  document.querySelector("form").style.display = "flex";
  document.querySelector("#display-library").style.display = "none";
}

// goes back to library without form submitting...back to list
function backToLibrary() {
  document.querySelector("form").style.display = "none";
  document.querySelector("#display-library").style.display = "flex";
}

// submit donation form button
document.querySelector("form").addEventListener("submit", addBookToLibrary);

displayBooks();

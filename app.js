console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}
class Library {
  constructor() {
    this.bookCount = 0;
    this.books = [];

    document.addEventListener("DOMContentLoaded", () => {
        const addBookButton = document.getElementById("addBook");
        addBookButton.addEventListener("click", () => {
          this.addBook();
        });
      });
    }

  markRead(id, checkbox) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books[i].read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
        break;
      }
    }
  }

  addBook() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const readCheckbox = document.getElementById("read");

    const title = titleInput.value;
    const author = authorInput.value;
    const read = readCheckbox.checked;

    const newBook = new Book(this.bookCount + 1, title, author, read);

    const newRow = document.createElement("tr");

    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const readCell = document.createElement("td");

    titleCell.textContent = newBook.title;
    authorCell.textContent = newBook.author;
    readCell.textContent = newBook.read ? "Yes" : "No";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        this.removeBook(newBook.id);
    newRow.remove();
    });
  
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(readCell);
    newRow.appendChild(removeButton);

    const tableBody = document.getElementById("bookList");
    tableBody.appendChild(newRow);

    this.bookCount++;

    titleInput.value = "";
    authorInput.value = "";
    readCheckbox.checked = false;
  }
  
  removeBook(id) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
    this.displayBooks();
  }

  displayBooks() {
    const tableBody = document.getElementById("bookList");
    tableBody.innerHTML = "";

    this.books.forEach((book) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = ` 
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.read ? "Yes" : "No"}</td>
        <td><class="remove-button" data-id="${book.id}">Remove</button></td>`;

        const removeButton = newRow.querySelector(".remove-button");
        removeButton.addEventListener("click", (event) => {
            const idToRemove = parseInt(event.target.getAttribute("data-id"));
            this.removeBook(idToRemove);
        });
        tableBody.appendChild(newRow);
    });
  }

}

 
  
  const myLibrary = new Library();
  
  Library.prototype.removeBook = function (id) {
      const index = this.books.findIndex((book) => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
      this.displayBooks(); 
    };
    
    Library.prototype.displayBooks = function () {
      const tableBody = document.getElementById("bookList");
      tableBody.innerHTML = ""; 
    
      this.books.forEach((book) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.read ? "Yes" : "No"}</td>
          <td><button class="remove-button" data-id="${book.id}">Remove</button></td>`;
    
        
        const removeButton = newRow.querySelector(".remove-button");
        removeButton.addEventListener("click", (event) => {
          const idToRemove = parseInt(event.target.getAttribute("data-id"));
          myLibrary.removeBook(idToRemove);
        });
    
        tableBody.appendChild(newRow);
      });
    };
    











   
     
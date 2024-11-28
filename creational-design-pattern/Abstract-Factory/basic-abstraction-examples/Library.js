console.log('********* Libraray ************')

/*Example 4: Library Management System
Analogy: In a library, you can borrow and return books, but you don’t know how the library tracks books internally.*/

class Library {
  #books = [];

  addBook(title) {
    this.#books.push({ title, isBorrowed: false });
    console.log(`${title} added to the library.`);
  }

  borrowBook(title) {
    const book = this.#books.find(b => b.title === title && !b.isBorrowed);
    if (book) {
      book.isBorrowed = true;
      console.log(`You borrowed: ${title}`);
    } else {
      console.log(`${title} is not available.`);
    }
  }

  returnBook(title) {
    const book = this.#books.find(b => b.title === title && b.isBorrowed);
    if (book) {
      book.isBorrowed = false;
      console.log(`You returned: ${title}`);
    } else {
      console.log(`${title} was not borrowed.`);
    }
  }
}

// Usage
const library = new Library();
library.addBook("Harry Potter");
library.addBook("The Hobbit");
library.borrowBook("Harry Potter"); // You borrowed: Harry Potter
library.returnBook("Harry Potter"); // You returned: Harry Potter
// library.#books; // Error: Cannot access private field



/*Key Takeaway: The #books array is private, and users can only interact through methods like borrowBook and returnBook.*/



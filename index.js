function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => {
      // Call renderBooks() with the books data
      renderBooks(data);

      // Additional code to handle other requirements
      const books = data.map(book => book.name);
      const text = books.join("");
      const character = text.charAt(1030);
      console.log(character);

      const totalPages = data.reduce((total, book) => total + book.numberOfPages, 0);
      console.log(totalPages);
    })
    .catch(error => {
      console.log(error); // Handle any errors
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
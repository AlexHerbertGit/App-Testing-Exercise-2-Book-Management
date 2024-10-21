//Array to store a list of books

const bookCollection = [];

//Function to add anew book to the collection
function addBook() {
    const titleInput = document.getElementById('book-title');
    const authorInput = document.getElementById('book-author');
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if(title !== "" && author !== "") {
        const newBook = {
            id: Date.now(), //Use a timestamp as the unique id
            title: title,
            author: author,
            read: false //Default value for a new book is "unread"
        };

        bookCollection.push(newBook);
        renderBooks(); //Render the updated list of books on front end
        titleInput.value = "";
        authorInput.value = "";
    }
}

//Function to toggle the read status of a book
function toggleBookStatus(id) {
    const book = bookCollection.find(book => book.id === id)
    if(book) {
        book.read = !book.read //Toogle the read status
        renderBooks(); //Render the updated list
    }
}

//Function to delete a book from the bookCollection
function deleteBook(id) {
    const bookIndex = bookCollection.findIndex(book => book.id === id) 
        if(bookindex > -1) {
            bookCollection.splice(bookIndex, 1)
            renderBooks() //Render the updated list
        }
    }

//Function to filter books based on the status
function filterBooks(status) {
    renderBooks(status)
}

//Function to render books on the UI page
function renderBooks(filter = 'all') {
    const bookIsElement = document.getElementById('book-list')
    bookIsElement.innerHTML = "" //Clear the exisiting list

    //Filter books based on the selected filter
    let filteredBooks = []
    if(filter === 'all') {
        filteredBooks = bookCollection;
    } else if (filter === 'read') {
        filteredBooks = bookCollection.filter((book) => book.read)
    } else if (filter === 'unread') {
        filteredBooks = bookCollection.filter((book) => !book.read )
    }

    //Render each book as list item
    filteredBooks.forEach(book => {
        const li = document.createElement('li')
        li.className = 'book-item'
        li.innerHTML = `<span class="${book.read ? 'read' : ''}" onclick="toggleBookStatus(${book.id})">${book.title} by ${book.author}</span>
            <button onclick="deleteBook(${book.id})">Delete</button>`;
        bookIsElement.appendChild(li);
    })
};

//Export function for testing
if(typeof module !== 'undefined') {
    module.exports = {
        addBook,
        toggleBookStatus,
        deleteBook,
        filteredBooks,
        bookCollection,
    };
}
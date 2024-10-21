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
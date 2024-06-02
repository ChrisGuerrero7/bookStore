let storageBooks = [] // list of books

// Add a book of the list of books
function addToCard (newBook) {
    storageBooks.push(newBook)
    // alert(`The book ${newBook} was added successfully`)
}

// Remove the last book from the list
function removeFromCard () {
    if (storageBooks.length === 0) {
        alert("Cart is empty. No books to remove.")
    } else {
        const removeBook = storageBooks.pop()
        // alert(`Removed book from the cart: ${removeBook}`)
    }
}

// shows the books we added in the box 
function addToBooks(e){
    e.preventDefault();
    const nameBook = document.querySelector("#nameBook").value;
    let existeElemento = storageBooks.includes(nameBook);

    // console.log(existeElemento)

    if (nameBook != "" ) {
        if (existeElemento != true) {
            const listOfBook = document.querySelector("ul");
            const li = document.createElement("li");
            li.textContent = nameBook;
            listOfBook.appendChild(li)
            addToCard(nameBook)
            // console.log(storageBooks)
        } else {
            alert("This book is duplicate. Enter a new book.")
        }
    } else {
        alert("No book found to add. Enter the name of your favorite book.")
    }
    

    
    
    

    
    
}

// Remove the last book from the page
function removeFromBooks(e) {
    e.preventDefault();

    const listOfBook = document.querySelector("ul");
    const lastBook = listOfBook.lastChild;
    listOfBook.removeChild(lastBook)
    removeFromCard()
    console.log(storageBooks)

}

const addBook = document.getElementById("add")
const removeBook = document.getElementById("remove")

addBook.addEventListener("click", addToBooks)
removeBook.addEventListener("click", removeFromBooks)







let storageBooks = []

const ADD_TO_CART_ACTION = 'addToCard'
const REMOVE_FROM_CART_ACTION = 'removeFromCard'
const VIEW_CART_ACTION = 'viewCart'

function viewCart() {
    let books = ""
    for (let i = 0; i <= storageBooks.length; i++) {
        let n = i + 1
        if (n > storageBooks.length) {
            break;
        }
        books += n.toString() + ". " + storageBooks[i] + ". \n"
    }
    alert("Los libros guardados son: \n" + books)
}

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            storageBooks.push(newBook)
            alert(`The book ${newBook} was added successfully`)
            break;
        
        case REMOVE_FROM_CART_ACTION:
            if (storageBooks.length === 0) {
                alert("Cart is empty. No books to remove.")
            } else {
                const removeBook = storageBooks.pop()
                alert(`Removed book from the cart: ${removeBook}`)
            }
            break;

        case VIEW_CART_ACTION:
            viewCart()
            break;

        default:
            alert('Invalid action. Please choose a valid option')
    }
}

function showMenu (){
    const optionsMenu = `Elige las siguientes opciones:
    1) Mostrar libros guardados.
    2) Añadir un libro.
    3) Eliminar libro.`

    selectedOption = prompt(optionsMenu)
    return selectedOption
}

selectedOption = showMenu()
if (selectedOption == "1") {
    performCartActions(VIEW_CART_ACTION)
} else if (selectedOption == "2") {
    const intoBook = prompt("Enter the name of the book:")
    performCartActions(ADD_TO_CART_ACTION, intoBook)
} else if (selectedOption == "3") {
    performCartActions(REMOVE_FROM_CART_ACTION)
} else {
    alert("Invalid option. Please choose an option again.")
}




const storageBooks = [
    "Originales",
    "Sin limites",
    "Juego de tronos",
    "Habitos Atomicos"
]

function showMenu (){
    const optionsMenu = `Elige las siguientes opciones:
    1) Mostrar libros guardados.
    2) Añadir un libro.
    3) Eliminar el ultimo libro.`

    selectedOption = prompt(optionsMenu)
    return selectedOption
}

function showBooks (booksList) {
    let books = ""
    for (let i = 0; i <= booksList.length; i++) {
        let n = i + 1
        if (n > booksList.length) {
            break;
        }
        books += n.toString() + ". " + booksList[i] + ". \n"
    }
    return books
}

function addBook (booksList) {
    const intoBook = prompt("Ingresa el nombre del libro que quieres añadir:")
    booksList.push(intoBook)

    alert("Se añadio el libro " + intoBook + "\nLos libros guardados son: \n" + showBooks(booksList))
}

function deleteBook (booksList) {
    const lastBook = booksList[booksList.length - 1]
    booksList.pop()
    alert("Se elimino el libro " + lastBook + "\nLos libros guardados son: \n" + showBooks(booksList))


}

//console.log(showBooks(storageBooks))
while (true){
    selectedOption = showMenu()
    if (selectedOption == 1) {
        alert("Los libros guardados son: \n" + showBooks(storageBooks))
    } else if (selectedOption == 2) {
        addBook(storageBooks)
    } else if (selectedOption == 3) {
        deleteBook(storageBooks)
    } else {
        alert("Opcion incorrecta.")
    }
}



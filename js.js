"use strict"
let buttonShowdialog = document.querySelector("#addBook")
let dialog = document.querySelector("#addBook + dialog")
buttonShowdialog.addEventListener("click", function () {
    dialog.show()
})

let buttonCloseDialog = document.querySelector("#diagClose")
buttonCloseDialog.addEventListener("click", function () {
    let inputs = dialog.querySelectorAll("input")
    let inputsValue = []
    for (let i of inputs) {
        inputsValue.push(i.value)
    }
    console.log(`inputsValue ${inputsValue}`)
    addBookToLibrary(...inputsValue)
    console.log(`myLibrary ${JSON.stringify(myLibrary)}`)
    dialog.close()
})

const myLibrary = [];

class Book {
    constructor(name, author) {
        this.name = name
        this.author = author
    }
}

function addBookToLibrary(n, a) {
    let obj = new Book(n, a)
    obj.id = crypto.randomUUID()
    myLibrary.push(obj)
}
function showBooks() {

}

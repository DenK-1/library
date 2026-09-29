"use strict"
let buttonShowdialog = document.querySelector("#addBook")
let dialog = document.querySelector("#dialog")
buttonShowdialog.addEventListener("click", function () {
    dialog.showModal()
})

let buttonCloseDialog = document.querySelector("#diagClose")
buttonCloseDialog.addEventListener("click", function () {
    let inputs = dialog.querySelectorAll("input")
    let inputsValue = []
    for (let i of inputs) {
        i.type == "checkbox" ? inputsValue.push(i.checked) : inputsValue.push(i.value)
    }
    console.log(`inputsValue ${inputsValue}`)
    addBookToLibrary(...inputsValue)
    console.log(`myLibrary ${JSON.stringify(myLibrary)}`)
    dialog.close()
})

const myLibrary = [];

class Book {
    constructor(name, author, pages, read) {
        this.name = name
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBookToLibrary(n, a, p, r) {
    let obj = new Book(n, a, p, r)
    obj.id = crypto.randomUUID()
    myLibrary.push(obj)
}
function showBooks() {

}

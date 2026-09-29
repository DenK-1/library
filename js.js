"use strict"
let buttonShowdialog = document.querySelector("#addBookButton")
let addBookBut = document.querySelector("#addBookForm")
buttonShowdialog.addEventListener("click", function () {
    addBookBut.style.display = "flex"
})

let buttonAddBook = document.querySelector("#addBook")
buttonAddBook.addEventListener("click", function (e) {
    let inputs = addBookBut.querySelectorAll("input")
    let inputsValue = []
    for (let i of inputs) {
        i.type == "checkbox" ? inputsValue.push(i.checked) : inputsValue.push(i.value)
    }
    console.log(`inputsValue ${inputsValue}`)
    addBookToLibrary(...inputsValue)
    e.preventDefault()
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

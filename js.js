"use strict"
let buttonShowdialog = document.querySelector("#addBookButton")
let addBookBut = document.querySelector("#addBookForm")
let inputs = addBookBut.querySelectorAll("input")
let clearInputs = function () {
    for (let i of inputs) {
        i.type == "checkbox" ? i.checked = false : i.value = ""
    }
}
buttonShowdialog.addEventListener("click", function () {
    addBookBut.style.display = "flex"
})

addBookBut.addEventListener("submit", function (e) {
    let inputsValue = []
    for (let i of inputs) {
        i.type == "checkbox" ? inputsValue.push(i.checked) : inputsValue.push(i.value)
    }
    console.log(`inputsValue ${inputsValue}`)
    addBookToLibrary(...inputsValue)
    clearInputs()
    e.preventDefault()
})


let closeBookButt = document.querySelector("#closeBook")
closeBookButt.addEventListener("click", function (e) {
    addBookBut.style.display = "none"
    clearInputs()
    e.preventDefault()
})

let allBooks = document.querySelector("#showBooks")
allBooks.addEventListener("click", function (e) {

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

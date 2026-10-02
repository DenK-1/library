"use strict"
const addBookBtn = document.querySelector("#add-book-button")
const addFormBtn = document.querySelector("#add-book-form")
const inputs = addFormBtn.querySelectorAll("input")
const clearInputs = function () {
    for (let i of inputs) {
        i.type == "checkbox" ? i.checked = false : i.value = ""
    }
}
addBookBtn.addEventListener("click", function () {
    addFormBtn.style.display = "flex"
})

addFormBtn.addEventListener("submit", function (e) {
    let inputsValue = []
    for (let i of inputs) {
        i.type == "checkbox" ? inputsValue.push(i.checked) : inputsValue.push(i.value)
    }
    addBookToLibrary(...inputsValue)
    clearInputs()
    showBooks()
    e.preventDefault()
})


const closeBookBtn = document.querySelector("#close-book")
closeBookBtn.addEventListener("click", function (e) {
    addFormBtn.style.display = "none"
    clearInputs()
    e.preventDefault()
})

const showBooksBtn = document.querySelector("#show-books")
showBooksBtn.addEventListener("click", function (e) {
    showBooks()
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

const allbooksEl = document.querySelector("#all-books")
allbooksEl.addEventListener("click", function (event) {
    let button = event.target.closest(".deleteBook")
    if (!button) return
    let el = event.target.closest(".book")
    let id = el.dataset.uuid
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == id) {
            myLibrary.splice(i--, 1)
        }
    }
    showBooks()
})

function showBooks() {
    if (myLibrary.length == 0) return
    const allbooks = allbooksEl.querySelectorAll(".book")
    for (let div of allbooks) div.remove()

    for (let obj of myLibrary) {
        let div = document.createElement("div")
        div.classList.add("book")
        div.setAttribute("data-uuid", obj.id)
        div.insertAdjacentHTML("afterbegin",
            `<div>Name:${obj.name}</div>
             <div>Author:${obj.author}</div>
             <div>Pages:${obj.pages}</div>
             <div>Read:${obj.read}</div>
             <button class="deleteBook">Delete</button>
            `)
        allbooksEl.append(div)
    }
}

addBookToLibrary("chapaev i pustota", "Victor Pelevin", 123, true)
addBookToLibrary("chapaev i pustota", "Victor Pelevin", 123, true)
showBooks() 
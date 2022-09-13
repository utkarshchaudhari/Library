function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function () {
    //     return `The ${title} by ${author}, ${pages} pages, ${read}`
    // }
}

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

const theHobbit = new Book('Hobbit', 'vk', 300, 'yes read')

console.log(theHobbit.info())
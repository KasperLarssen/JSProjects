function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    if(read = True) {
    this.info = console.log(title + ", " + pages + " pages, " + "you have read this")
    }
    else {
    this.info = console.log(title + ", " + pages + " pages, " + "not read yet") 
    }
}
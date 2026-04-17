const book = {
title: 'Die Schule der Denkbarkeit',
author: 'Richard Feynman',
pages: 250,
isRead: false,
describe() { //4
    console.log(`${this.title} von ${this.author} - ${this.pages} Seiten`);
}
};

console.log(book.title); //1

console.log(book['author']); //2

book.rating = 5; //3

book.describe();
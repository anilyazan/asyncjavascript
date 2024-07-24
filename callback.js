/* console.log('1. görev');
console.log('2. görev');
console.log('3. görev'); */

/*const function1 = () => {
    console.log('func 1 tamamlandı');
};

const function2 = () => {
    console.log('func 2 tamamlandı');
};

function2();
function1();
function1();
*/
/*
let x = 5;
console.log('1.gelen veri', x);

setTimeout(() => {
    x=x+5;
    console.log('2.gelen veri',x)
},4000);

x= x+5; 
console.log('3.gelen veri', x);
*/

const books = [
    {name: 'kitap1', author:'yazar1'},
    {name:'kitap2', author:'yazar2'},
    {name:'kitap3', author:'yazar3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}; 

const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
};
addBook({name:'kitap4', author:'yazar4'}, listBooks);

//listBooks();

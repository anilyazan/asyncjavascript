/*const promise1 = new Promise ((resolve, reject) => {
resolve('veriler alındı');
reject('oldu mu la')
});


promise1.then(value => {
    console.log(value);
}).catch(error=>{
        console.log(error);
    });
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
    
    const addBook = (newBook) => {

        const promise1 = new Promise ((resolve,reject) => {
            books.push(newBook);
            //resolve(books);
            reject('bir hata oluştu');
        })
       return promise1;
        
    };
    addBook({name:'kitap10', author:'yazar10'})
    .then(()=>{
        console.log("yeni liste");
        listBooks();
    }).catch((error)=>{
        conosole.log(error);
    });
    
    //listBooks();
    
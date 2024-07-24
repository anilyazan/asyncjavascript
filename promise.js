const promise1 = new Promise ((resolve, reject) => {
resolve('veriler alındı');
reject('oldu mu la')
});


promise1.then(value => {
    console.log(value);
}).catch(error=>{
        console.log(error);
    });
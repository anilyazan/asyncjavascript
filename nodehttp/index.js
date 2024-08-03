const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url
    
    if(url === '/' ) {
        res.write('index sayfası');
    }
    else if(url === '/about') {
        res.write('about sayfası ');
    }
    else if( url === '/contact') {
        res.write('contact sayfası');
    }
    else {
        res.write('404 sayfa bulunamadı');
    }
    
    res.end();
} );

const port = 3000;

server.listen(port, ()=> {
    console.log(`sunucu port ${port} de başlatıldı`)
});
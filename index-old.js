const http = require('http');

http.createServer((req, res) => {

    // CSV
    /*res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, ({ 'Content-Type': 'application/csv' }));

    res.write('id, nombre\n');
    res.write('1, Joel\n');
    res.write('2, Ana\n');
    res.write('3, Kira\n');
    res.write('4, Luna\n');
    res.end();*/

    // JSON
    /*res.writeHead(200, ({ 'Content-Type': 'application/json' }));
    
    const persona = {
        id: 1,
        nombre: 'Joel Lizardi'
    }

    res.write(JSON.stringify(persona));
    res.end();*/

    res.write('Hola Mundo');
    res.end();
    

}).listen(8080);

console.log('Escuchando en el puerto', 8080);
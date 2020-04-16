const express = require('express');

const app = express();

app.get('/', (require, response) =>{
    response.sendFile('');
});

app.get('/sobre', (require, response) => {
    response.send('Minha pagina sobre');
});

app.get('/ola/:nome/:cargo/:junior', (require, response) =>{
    response.send("<h1>Olá " + require.params.nome + "</h1>" 
        + "<h2>Seu cargo é: " + require.params.cargo + "</h2>" 
        + "<h3>Seu rank é : " + require.params.junior+ "</h2>");
    
});





app.listen(3000, () => {
    console.log('Servidor rodando na porta: http://localhost:3000')
});
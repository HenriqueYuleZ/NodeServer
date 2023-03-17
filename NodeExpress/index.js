const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello Friend...');
});

app.listen(port, () => {
    console.log('Servidor iniciado com sucesso!');
    console.log('Servidor rodando em http://localhost:8000');
    console.log('Para derrubar o servidor: ctrl + c');
});
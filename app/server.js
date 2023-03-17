const http = require('http')
const port = 3000
const ip = 'localhost'
const server = http.createServer((req, res) => {
    const responses = []
    responses['/'] = '<h1>Home</h1>';
    responses['/cadastro'] = '<h1>Cadastro</h1>';
    responses['/conteudo'] = '<h1>Conteudo</h1>';
    responses['/local'] = '<h1>Local</h1>';
    responses['/contato'] = '<h1>Contato</h1>';
    responses['/notfound'] = '<h1>URL sem resposta definida!</h1>';
    res.end(responses[req.url] || responses['notfound']);
});

server.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`);
    console.log('Para derrubar o servidor: ctrl + c');
});
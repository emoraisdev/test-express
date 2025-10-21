const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('<h1>Listar Clientes</h1>'))
    .post((req, res) => res.send('<h1>Novo Cliente</h1>'))
    .put((req, res) => res.send('<h1>Atualizar Cliente</h1>'))
    .delete((req, res) => res.send('<h1>Remover Cliente</h1>'))

server.listen(3000, () => {
    console.log('Executando...')
})
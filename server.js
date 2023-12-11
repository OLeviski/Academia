import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()

server.get('/', () => {
    return 'Olá Mundo!'
})
server.post('/livro', (request, reply) => {
// acessando dados do corpo
//  const body = request.body
// exibindo dados no terminal
//    console.log(body)

const {titulo, autor, npaginas} = re

    database.create({
        titulo: 'Livro 01',
        autor: 'Autor 01',
        npaginas: 400,
    })
// listando objeto criado
    console.log(database.list())
// retornando o status da rota
return reply.status(201).send()
})
server.get('/livro', () => {
    return "Ler!"
})

server.listen({
    port: 3333,
})
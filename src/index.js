import server from './services/server.js'
import { initMongoDB } from './persistence/database.js'

const PORT = process.env.PORT || 3002

server.listen(PORT, async () => {
    await initMongoDB()
    console.log(`Servidor ONLINE escuchando en puerto ${PORT}`)
})

server.on('error', (err) => {
    console.error(err.message)
    console.error(err.stack)
})
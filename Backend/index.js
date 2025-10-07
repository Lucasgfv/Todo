const express = require('express')
const app = express()
const PORT = 3000
const arrayResponse = []

app.get('/', (request, response) =>{
    response.json(arrayResponse)
})

app.listen(PORT, () => {
    console.log(`Servidor esta reodando na porta ${PORT}`)
})
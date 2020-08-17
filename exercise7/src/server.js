const express = require('express')

const server = express()

server.use(express.json())

server.get("/", (request, response) => {
    return response.json({ currentDateTime: "20190812T14:40Z" })
})

server.listen(3333)
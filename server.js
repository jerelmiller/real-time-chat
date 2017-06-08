const express = require('express')
const Server = require('http').Server
const socket = require('socket.io')

const port = 4000
const app = express()
const server = Server(app)
const io = socket(server)

io.on('connection', socket => {
  console.log('connected!')
})

server.listen(port, err => {
  if (err) {
    console.log('error', err)
  } else {
    console.log(`listening on ${port}`)
  }
})
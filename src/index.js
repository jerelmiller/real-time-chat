import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import io from 'socket.io-client'

const socket = io()

ReactDOM.render(
  <App socket={ socket } />,
  document.getElementById('root')
)
registerServiceWorker()

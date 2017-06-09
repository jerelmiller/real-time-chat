import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import io from 'socket.io-client'
import './globalStyles'

const socket = io('http://localhost:4000')

ReactDOM.render(
  <App socket={ socket } />,
  document.getElementById('root')
)
registerServiceWorker()

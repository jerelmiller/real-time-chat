import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import io from 'socket.io-client'
import './globalStyles'

const socket = io(process.env.REACT_APP_SOCKET_ADDRESS)

ReactDOM.render(
  <App socket={ socket } />,
  document.getElementById('root')
)
registerServiceWorker()

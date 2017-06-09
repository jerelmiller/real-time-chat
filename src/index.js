import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import io from 'socket.io-client'
import guid from './utils/guid'
import './globalStyles'

const socket = io(process.env.REACT_APP_SOCKET_ADDRESS)
const id = guid()

ReactDOM.render(
  <App socket={ socket } id={ id } />,
  document.getElementById('root')
)
registerServiceWorker()

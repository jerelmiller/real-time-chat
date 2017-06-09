const CHANGE_VALUE = 'CHANGE_VALUE'
const INCOMING_MESSAGE = 'INCOMING_MESSAGE'
const RESET_VALUE = 'RESET_VALUE'
const SET_USERNAME = 'SET_USERNAME'
const USER_STARTED_TYPING = 'USER_STARTED_TYPING'
const USER_STOPPED_TYPING = 'USER_STOPPED_TYPING'

export const changeValue = value => ({
  type: CHANGE_VALUE,
  value
})

export const incomingMessage = (message, mine) => ({
  type: INCOMING_MESSAGE,
  mine,
  message
})

export const resetValue = () => ({
  type: RESET_VALUE
})

export const setUsername = username => ({
  type: SET_USERNAME,
  username
})

export const userStartedTyping = user => ({
  type: USER_STARTED_TYPING,
  user
})

export const userStoppedTyping = user => ({
  type: USER_STOPPED_TYPING,
  user
})

const usersTyping = (state = [], action) => {
  switch (action.type) {
    case USER_STARTED_TYPING:
      return [
        ...state,
        action.user
      ]
    case USER_STOPPED_TYPING:
      return state.filter(user => user.id !== action.user.id)
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case INCOMING_MESSAGE:
      return [
        ...state,
        { ...action.message, mine: action.mine }
      ]
    default:
      return state
  }
}

const value = (state = '', action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.value
    case RESET_VALUE:
      return ''
    default:
      return state
  }
}

const username = (state = '', action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state
  }
}

const reducer = (state = {}, action) => {
  return {
    messages: messages(state.messages, action),
    usersTyping: usersTyping(state.usersTyping, action),
    username: username(state.username, action),
    value: value(state.value, action)
  }
}

export default reducer

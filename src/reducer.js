const CHANGE_VALUE = 'CHANGE_VALUE'
const INCOMING_MESSAGE = 'INCOMING_MESSAGE'
const RESET_VALUE = 'RESET_VALUE'
const USER_STARTED_TYPING = 'USER_STARTED_TYPING'
const USER_STOPPED_TYPING = 'USER_STOPPED_TYPING'

const initialState = {
  usersTyping: [],
  messages: [],
  value: ''
}

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
    case RESET_VALUE:
      return {
        ...state,
        value: value(state.value, action)
      }
    case INCOMING_MESSAGE:
      return {
        ...state,
        messages: messages(state.messages, action)
      }
    case USER_STARTED_TYPING:
    case USER_STOPPED_TYPING:
      return {
        ...state,
        usersTyping: usersTyping(state.usersTyping, action)
      }
    default:
      return state
  }
}

export default reducer

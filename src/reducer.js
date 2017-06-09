const CHANGE_VALUE = 'CHANGE_VALUE'
const INCOMING_MESSAGE = 'INCOMING_MESSAGE'
const RESET_VALUE = 'RESET_VALUE'
const USER_STARTED_TYPING = 'USER_STARTED_TYPING'
const USER_STOPPED_TYPING = 'USER_STOPPED_TYPING'

const initialState = {
  typing: false,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
        typing: Boolean(action.value)
      }
    case RESET_VALUE:
      return {
        ...state,
        value: '',
        typing: false
      }
    case INCOMING_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { ...action.message, mine: action.mine }
        ]
      }
    case USER_STARTED_TYPING:
      return {
        ...state,
        usersTyping: [
          ...state.usersTyping,
          action.user
        ]
      }
    case USER_STOPPED_TYPING:
      return {
        ...state,
        usersTyping: state.usersTyping.filter(user =>
          user.id !== action.user.id
        )
      }
    default:
      return state
  }
}

export default reducer

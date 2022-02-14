
import {
  GET_MESSAGE,
  POST_MESSAGE,
  PUT_MESSAGE,
  DELETE_MESSAGE
} from './actionsTypes'

const initialState = {
  Messages:[],
  error: null,
  status: null,
}

export const Reducer  = (state = initialState, action) => {
  switch(action.type) {
    case GET_MESSAGE:
      return{
        ...state,
        ...action.payload
      }
      break;
    case POST_MESSAGE:
      return{
        ...state,
        ...action.payload
      }
      break;
    
    default:
      return state
  }
}
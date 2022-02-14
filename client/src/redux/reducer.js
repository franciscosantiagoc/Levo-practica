
import {
  GET_MESSAGE,
  POST_MESSAGE,
  PUT_MESSAGE,
  DELETE_MESSAGE,
  RESET
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
    case PUT_MESSAGE:
      return{
        ...state,
        ...action.payload
      }
      break;
    case DELETE_MESSAGE:
      return{
        ...state,
        status: action.payload
      }
      break;

    case RESET:
      return{
        ...state,
        error: null,
        status: null,
      }
      break;
    
    default:
      return state
  }
}
import axios from 'axios';
import {
  GET_MESSAGE,
  POST_MESSAGE,
  PUT_MESSAGE,
  DELETE_MESSAGE,
  RESET
} from './actionsTypes'

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/"

export const postMessage=(data)=>{
  console.log('data', data)
  try {
    return async(dispatch)=>{
      let resp = await axios.post(`${SERVER}messages`,data)
      return dispatch({
        type: POST_MESSAGE,
        payload: resp.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const getMessages=()=>{
  try {
    return async(dispatch)=>{
      let resp = await axios.get(`${SERVER}messages`)
      return dispatch({
        type: GET_MESSAGE,
        payload: resp.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const putMessages=(data)=>{
  try {
    return async(dispatch)=>{
      let resp = await axios.put(`${SERVER}messages`,data)
      return dispatch({
        type: PUT_MESSAGE,
        payload: resp.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const delMessages=(id)=>{
  try {
    return async(dispatch)=>{
      let resp = await axios.delete(`${SERVER}messages/${id}`)
      return dispatch({
        type: DELETE_MESSAGE,
        payload: resp.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const RESETMESS=()=>{
  return async(dispatch)=>{
    return dispatch({
      type: RESET
    })
  }
}
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  EMAIL_CHANGED, PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_IN_PROGRESS
} from '../types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
  Actions.main()
}

const loginUserFail = (dispatch, err) => {
  let payload = `Authentication failed: ${err.message}`
  if (err.code === 'auth/weak-password') {
    payload = `Password: ${err.message}`
  }
  dispatch({ type: LOGIN_USER_FAILURE, payload })
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_IN_PROGRESS })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch((err) => loginUserFail(dispatch, err))
        }
        else {
          loginUserFail(dispatch, err)
        }
      })
  }
}

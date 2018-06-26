import {
  EMAIL_CHANGED, PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_IN_PROGRESS
} from '../types'

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
}

export default (state = INITIAL_STATE, action) => {
  console.log('action', action)
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }

    case LOGIN_USER_FAILURE:
      return { ...state, error: action.payload,
        loading: false, password: '' }

    case LOGIN_IN_PROGRESS:
      return { ...state, loading: true, error: '' }

    default:
      return state
  }
}

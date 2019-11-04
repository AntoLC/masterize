import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error:null,
  error_signUp:null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
    return {
      ...state,
      currentUser: action.payload,
      error: null,
      error_signUp: null
    }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        error_signUp: null
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    return {
      ...state,
      error: action.payload
    }
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.ERROR_MESSAGE:
      return {
        ...state,
        error_signUp: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;


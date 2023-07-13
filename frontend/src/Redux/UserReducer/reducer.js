import {
  USRES_REQUEST_PENDING,
  USRES_REQUEST_FAILURE,
  USRES_REQUEST_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USRES_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case USRES_REQUEST_SUCCESS:
      return { ...state, isLoading: false, users: action.payload };
    case USRES_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

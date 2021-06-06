import { GET_QUERYDATA } from '../actions/actionTypes';

const initialState = {
  queryData: [],
  loading: true
}

const queryDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERYDATA:
      return {
        ...state,
        queryData: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default queryDataReducer;

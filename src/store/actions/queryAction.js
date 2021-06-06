import { GET_QUERYDATA, QUERYDATA_ERROR } from './actionTypes';
import axios from 'axios';

export const getQueryData = (typeSearch, wordSearch) => async dispatch => {
  let url = "https://swapi.dev/api/" + typeSearch;
  axios.get(url, {params: {search: wordSearch}})
  .then(response => {
    dispatch({
      type: GET_QUERYDATA,
      payload: response.data.results
    })
  })
  .catch(error => {
    dispatch({
      type: QUERYDATA_ERROR,
      payload: console.log(error)
    })
  })
}

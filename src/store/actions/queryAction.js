import { GET_QUERYDATA, QUERYDATA_ERROR } from './actionTypes';
import axios from 'axios';

export const getQueryData = (typeSearch, wordSearch, whichPage) => async dispatch => {
  let url = "https://swapi.dev/api/" + typeSearch;
  axios.get(url, {params: {search: wordSearch, page: whichPage}})
  .then(response => {
    dispatch({
      type: GET_QUERYDATA,
      payload: {
        results: response.data.results.sort((a, b) => a.name > b.name ? 1:-1),
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous
      }
    })
  })
  .catch(error => {
    dispatch({
      type: QUERYDATA_ERROR,
      payload: console.log(error)
    })
  })
}

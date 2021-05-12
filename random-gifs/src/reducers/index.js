import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, FETCH_TAG_SUCCESS } from '../actions';

const initialState = {
  gif: {},
  isFetching: false,
  error: '',
  tagGif: {}
};

// animeDetails: {
//     {
//         anime: '...',
//         character: '...',
//         quote: '...'
//     }
// }

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        isFetching: true
      })
    case(FETCH_SUCCESS):
      return({
        ...state,
        gif: action.payload,
        isFetching: false
      })
    case(FETCH_TAG_SUCCESS):
      return({
          ...state,
          tagGif: action.payload,
          isFetching: false
      })
    case(FETCH_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
};
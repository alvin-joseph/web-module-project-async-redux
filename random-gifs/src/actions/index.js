import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_TAG_SUCCESS = "FETCH_TAG_SUCCESS";

const API_KEY = 'RyYNFXtMI71rFQOTQBFFTpeCKPYolmag';

export const fetchGIF = () => {
    return (dispatch => {
        dispatch({type: FETCH_START});
    
        dispatch(fetchStart());
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
          .then(res=> {
            const imgSrc = res.data.data.images.downsized_large.url
            dispatch({type: FETCH_SUCCESS, payload: imgSrc});
          })
          .catch(err=>{
            dispatch({type: FETCH_FAIL, payload:err});
          })
    });
}

export const fetchTag = (tag) => {
  return (dispatch => {
      dispatch({type: FETCH_START});
  
      dispatch(fetchStart());
      axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`)
        .then(res=> {
          const imgSrc = res.data.data.images.downsized_large.url
          dispatch({type: FETCH_TAG_SUCCESS, payload: imgSrc});
        })
        .catch(err=>{
          dispatch({type: FETCH_FAIL, payload:err});
        })
  });
}

export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:person});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error})
}
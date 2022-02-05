import axios from "axios";
import { Dispatch } from "redux";

//import data from "../../data.json"


export const getData = () => (dispatch:Dispatch) => {
  axios.get('data.json')
    .then((res)=> 
    dispatch({
      type: "GET_DATA",
      payload: res.data
    })
    )
    .catch((err)=> {
      dispatch({
        type: "GET_DATA_ERROR",
        payload: err
      })
    })
}
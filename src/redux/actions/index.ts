import axios from "axios";
import { Dispatch } from "redux";

import { filterData } from "../../utils/filterData";


export const getData = (str: string) => (dispatch:Dispatch) => {
  axios.get('data.json')
    .then((res)=> 
    dispatch({
      type: "GET_DATA",
      payload: filterData(res.data, str)
    })
    )
    .catch((err)=> {
      dispatch({
        type: "GET_DATA_ERROR",
        payload: err
      })
    })
}

export const addToCartAction = (item: {}) => (dispatch:Dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: item
  })
}

export const removeFromCartAction = (item: {}) => (dispatch:Dispatch) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: item
  })
}
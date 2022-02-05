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
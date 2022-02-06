
const INITIAL_STATE = {
  data: [],
  getDataError: null,
  cartTotal: [],
  pageName: "",
}

export const reducer = (state = INITIAL_STATE, action: any) => {

  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload }
    case "GET_DATA_ERROR":
      return { ...state, getDataError: action.payload }
    case "ADD_TO_CART":
      return { ...state, cartTotal:[...state.cartTotal, action.payload] }
    case "REMOVE_FROM_CART":
      return { ...state, cartTotal: state.cartTotal.filter((item:any )=> item.id !== action.payload) }
    case "SET_PAGE_NAME":
      return { ...state, pageName: action.payload }
      default:
      return state
  }
}
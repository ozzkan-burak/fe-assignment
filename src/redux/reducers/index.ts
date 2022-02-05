const INITIAL_STATE = {
  data: [],
  getDataError: null
}

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload }
    case "GET_DATA_ERROR":
      return { ...state, getDataError: action.payload }
    default:
      return state
  }
}
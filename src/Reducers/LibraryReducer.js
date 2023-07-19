import { library } from "../data";
export const initialState = {
  library: library,
  search: ""
};

export const LibraryReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIBRARY":
      return { ...state, library: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

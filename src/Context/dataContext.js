import { createContext, useReducer, useState } from "react";
import { initialState, LibraryReducer } from "../Reducers/LibraryReducer";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LibraryReducer, initialState);

  const changeCategory = (currCategory, targetCategory, bookId) => {
    const updatedLibrary = state?.library?.map((item) => ({
      ...item,
      category:
        item.category === currCategory && item.id === bookId
          ? targetCategory
          : item.category
    }));
    dispatch({ type: "SET_LIBRARY", payload: updatedLibrary });
    dispatch({ type: "SET_SEARCH", payload: "" });
  };

  const searchBook = (searchedBook) => {
    console.log(searchedBook);
    dispatch({ type: "SET_SEARCH", payload: searchedBook });
  };

  const searchedBooks =
    state?.search !== ""
      ? state?.library?.filter((product) =>
          product?.title?.toLowerCase().includes(state?.search)
        )
      : state?.library;

  return (
    <DataContext.Provider
      value={{ changeCategory, state, searchBook, searchedBooks }}
    >
      {children}
    </DataContext.Provider>
  );
};

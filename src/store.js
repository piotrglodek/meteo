import React, { useReducer, createContext, useEffect } from 'react';

export const StoreContext = createContext();

const initialState = {
  darkTheme: false,
  city: 'Warsaw',
};

export const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  UPDATE_CITY: 'UPDATE_CITY',
};

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case actionTypes.UPDATE_CITY:
      return { ...state, city: payload };
    case actionTypes.TOGGLE_THEME:
      return { ...state, darkTheme: payload };
    default:
      throw new Error();
  }
};

export const StoreContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkTheme');
    if (localTheme === 'true') {
      dispatch({ type: actionTypes.TOGGLE_THEME, payload: true });
    }
  }, []);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};

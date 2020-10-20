import React, { useReducer, createContext } from 'react';

export const StoreContext = createContext();

const initialState = {
  theme: 'light',
  city: 'Warsaw',
  lon: null,
  lat: null,
};

export const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  UPDATE_CITY: 'UPDATE_CITY',
  UPDATE_LON: 'UPDATE_LON',
  UPDATE_LAT: 'UPDATE_LAT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CITY:
      return { ...state, city: action.payload };
    case actionTypes.UPDATE_LON:
      return { ...state, lon: action.payload };
    case actionTypes.UPDATE_LAT:
      return { ...state, lat: action.payload };
    case actionTypes.TOGGLE_THEME:
      const currTheme = state.theme;
      return { ...state, theme: currTheme === 'light' ? 'dark' : 'light' };
    default:
      throw new Error();
  }
};

export const StoreContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};

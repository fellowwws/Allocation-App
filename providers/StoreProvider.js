import React, { useState, useEffect, useReducer, createContext } from "react";
import { AsyncStorage } from "react-native";
import rootReducer from "../reducers/rootReducer";
import { setStaff } from "../reducers/staffReducer";
import { setRecords } from "../reducers/recordsReducer";

export const StoreContext = createContext();

const initialState = {
  staff: {},
  records: {},
};

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [loading, setLoading] = useState(true);
  // AsyncStorage.setItem("STORE", JSON.stringify(null));

  useEffect(() => {
    AsyncStorage.getItem("STORE")
      .then((value) => {
        const state = JSON.parse(value);

        if (state !== null) {
          dispatch(setStaff(state.staff));
          dispatch(setRecords(state.records));
        }
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("STORE", JSON.stringify(state));
  }, [state]);

  const values = {
    state,
    dispatch,
    loading,
  };
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
}

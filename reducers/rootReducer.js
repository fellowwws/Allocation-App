import staff from "./staffReducer";
import records from "./recordsReducer";

export default combineReducers({ staff, records });

function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
}

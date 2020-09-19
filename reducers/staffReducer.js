export default function (state, action) {
  if (action.type === "ADD") {
    let { id } = action.payload;
    return {
      ...state,
      [id]: action.payload,
    };
  }
  if (action.type === "REMOVE") {
    let { id } = action.payload;
    const staff = { ...state };
    delete staff[id];

    return staff;
  }
  if (action.type === "SET_STAFF") {
    return action.payload;
  }

  return state;
}

export const add = (person) => ({
  type: "ADD",
  payload: person,
});
export const remove = (id) => ({
  type: "REMOVE",
  payload: { id },
});
export const setStaff = (state) => ({
  type: "SET_STAFF",
  payload: state,
});

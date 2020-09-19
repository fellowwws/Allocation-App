export default function (state, action) {
  if (action.type === "CREATE") {
    let { id } = action.payload;

    return {
      ...state,
      [id]: action.payload,
    };
  }
  if (action.type === "UPDATE") {
    let { id, type, index, update } = action.payload;
    const record = { ...state[id] };
    record[type][index] = update;

    return {
      ...state,
      [id]: record,
    };
  }
  if (action.type === "REMOVE") {
    let { id } = action.payload;
    const records = { ...state };
    delete records[id];

    return records;
  }
  if (action.type === "RESET") {
    let { type } = action.payload;
    const records = { ...state };

    Object.keys(records).map((key) => {
      if (type === "weekly") {
        records[key].weekly = Array(5).fill("");
      } else {
        records[key].monthly = Array(4).fill("");
      }
    });

    return records;
  }
  if (action.type === "SET_RECORDS") {
    return action.payload;
  }

  return state;
}
// export default function (state, action) {
//   switch (action.type) {
//     case "CREATE":
//       let { payload } = action;
//       return {
//         ...state,
//         [payload.id]: payload,
//       };
//     case "UPDATE":
//       let { id, type, index, update } = action.payload;
//       const record = { ...state[id] };
//       record[type][index] = update;

//       return {
//         ...state,
//         [id]: record,
//       };
//     case "RESET":
//       let { type } = action.payload;
//       const records = { ...state.records };

//       Object.keys(records).map((record) => {
//         if (type === "weekly") {
//           record["weekly"] = Array(5).fill("");
//         } else {
//           record["monthly"] = Array(4).fill("");
//         }
//       });

//       return records;
//     case "SET_STATE":
//       return action.payload;
//     default:
//       return state;
//   }
// }

// {
//   staff: {...},
//   records: {
//     bxX3Gb : {
//       id: 'bxX3Gb',
//       weekly: ["", "", "", "", ""],
//       monthly: ["", "", "", ""],
//     }
//   }
// }

// export const action = input => ({
//   type: "",
//   payload: input
// });

export const create = (record) => ({
  type: "CREATE",
  payload: record,
});
export const update = (id, type, index, update) => ({
  type: "UPDATE",
  payload: { id, type, index, update },
});
export const remove = (id) => ({
  type: "REMOVE",
  payload: { id },
});
export const reset = (type) => ({
  type: "RESET",
  payload: { type },
});
export const setRecords = (state) => ({
  type: "SET_RECORDS",
  payload: state,
});

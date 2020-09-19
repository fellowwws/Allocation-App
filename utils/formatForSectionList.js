// export default function transform(data) {
//   const lookupTable = {};
//   const transformed = [];

//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     const charAtZero = item.name.charAt(0);

//     if (!lookupTable[charAtZero]) {
//       transformed.push({
//         title: charAtZero,
//         data: [item]
//       });
//       lookupTable[charAtZero] = { index: i };
//     } else {
//       transformed[lookupTable[charAtZero].index].data.push({ name: item.name });
//     }
//   }

//   return transformed;
// }

export default function formatForSectionList(input) {
  const lookupTable = {};
  const output = [];

  Object.keys(input).forEach((key, index) => {
    const item = input[key];
    const charAtZero = item.name.charAt(0);

    if (!lookupTable[charAtZero]) {
      output.push({
        title: charAtZero,
        data: [{ ...item }]
      });
      lookupTable[charAtZero] = { index };
    } else {
      output[lookupTable[charAtZero].index].data.push({
        id: item.id,
        name: item.name
      });
    }
  });

  return output;
}

export const compareByTitleASC = (a, b) => (a.title < b.title ? -1 : 1);

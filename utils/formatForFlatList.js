export default function formatForFlatList(input) {
  const output = [];
  Object.keys(input).forEach(key => {
    output.push({ id: key, ...input[key] });
  });

  return output;
}

export const compareByNameASC = (a, b) => (a.name < b.name ? -1 : 1);

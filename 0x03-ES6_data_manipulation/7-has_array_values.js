export default function hasValuesFromArray(set, array) {
  return array.every((s) => set.has(s));
}

export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const j of array) {
    arr.push(appendString + j);
  }
  return arr;
}

export default function getStudentIdsSum(studentid) {
  return studentid.reduce((preVal, currentvalue) => preVal + currentvalue.id, 0);
}

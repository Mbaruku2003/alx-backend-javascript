export default function getStudentsByLocation(getlistStudents, city) {
  return getlistStudents.filter((s) => s.location === city);
}

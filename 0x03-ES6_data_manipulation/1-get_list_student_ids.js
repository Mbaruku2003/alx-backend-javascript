export default function getListStudentIds(listofStudents) {
  if (!(listofStudents instanceof Array)) {
    return [];
  }
  return listofStudents.map((student) => student.id);
}

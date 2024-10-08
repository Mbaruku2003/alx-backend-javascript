export default function getListStudentIds(listofStudents) {
  let listStudentIds = [];
  if (!(listStudentIds instanceof Array)) {
    return [];
  }
  listStudentIds = listofStudents.map((student) => student.id);
  return listStudentIds;
}

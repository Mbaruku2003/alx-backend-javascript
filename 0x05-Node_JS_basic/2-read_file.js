const fs = require('fs');

const countStudents = (thepath) => {
  if (!fs.existsSync(thepath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(thepath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(thepath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  if (fileLines.length < 2) {
    throw new Error('Cannot load the database');
  }

  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    if (studentRecord.length !== dbFieldNames.length) {
      continue;
    }

    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropNames.map((propName, idx) => [
      propName.toLowerCase(), studentPropValues[idx], ]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }
  const totalStudents = Object.values(studentGroups).reduce(
    (pre, cur) => pre + cur.length,
    0,
  );
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstName).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};
module.exports = countStudents;

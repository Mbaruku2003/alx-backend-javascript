const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line);
    if (lines.length <= 0) {
      throw new Error('Cannot load the database');
    }

    const rows = lines.slice(1);
    const students = rows.map((row) => {
      const [firstname, lastname, age, field] = row.split(',');
      return {
        firstname,
        lastname,
        age,
        field,
      };
    });
    const fields = {};
    for (const student of students) {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    }
    console.log(`Number of students: ${students.length}`);
    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;

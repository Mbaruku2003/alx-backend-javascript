const fs = require('fs');

/**
 * Reads a Csv file assynchronously and counts students by field
 * @param {string} filepath
 * @returns {Promise<void>}
 */
function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = {};
      let totalStudents = 0;
      lines.forEach((line) => {
        const values = line.split(',');
        if (values.length >= 4) {
          const field = values[3].trim();
          const name = values[0].trim();
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(name);
          totalStudents += 1;
        }
      });
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, names] of Object.entries(students)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve();
    });
  });
}
module.exports = countStudents;

const fs = require('fs');
const path = require('path');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length <= 1) {
          throw new Error('No valid data in the database');
	}
        const headers = lines.shift();
        const students = lines.map((line) => line.split(','));
        const fields = {};
        students.forEach((student) => {
          if (student.length < 4) {
            return;
	  }
          const [firstname, lastname, age, field] = student.map((item) => item.trim());
          if (!fields[field]) {
            fields[field] = [];
	  }
          fields[field].push(firstname);
	});
        const totalStudents = Object.values(fields).reduce((sum, list) => sum + list.length, 0);
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
	}
        resolve();
      }  catch (processError) {
          reject(newError('Cannot load the database'));
      }
    });
  });
}
module.exports = countStudents;

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Leonard',
  lastName: 'Jembe',
  age: 21,
  location: 'kamulu',
};

const student2: Student = {
  firstName: 'Gideon',
  lastName: 'Bahati',
  age: 17,
  location: 'kAMULU',
};

studentList: Student[] = [student1, student2];

const body = document.querySelector("body");
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentList.forEach((student) => {
	const row = document.createEement("tr");

	const firstNameCell = document.firstName;
	const locationcell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	tableBody.appendChild(row);
});

table.appendChild(tableBody);
body.appendChild(table);

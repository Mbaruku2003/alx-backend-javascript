export default function createReportObject(employeesList) {
  return {
    allemployees: {
      ...employeesList,
    },
    getNumberOfDepartment: (employeesList) => Object.keys(employeesList).length,
  };
}

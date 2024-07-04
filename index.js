// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway"));

for (streetAddress in employee) {
    delete employee["streetAddress"];
}

console.log(employee)

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
}
console.log(deleteFromEmployeeByKey(employee, "name"))

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));

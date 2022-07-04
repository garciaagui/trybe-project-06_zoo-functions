const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employeeFound = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  if (!employeeFound) return 'Pessoa colaboradora não encontrada na base de dados';
  return employeeFound;
}

module.exports = getEmployeeByName;

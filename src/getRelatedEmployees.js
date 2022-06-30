const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const collaborators = employees.filter((employee) => employee.managers.includes(managerId));
  return collaborators.map((collaborator) => `${collaborator.firstName} ${collaborator.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

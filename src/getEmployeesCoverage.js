const data = require('../data/zoo_data');

const { species, employees } = data;

function getAnimalsInfo(employee) {
  const animalsId = employee.responsibleFor;
  return {
    names: animalsId.map((id) => (species.find((specie) => specie.id === id)).name),
    locations: animalsId.map((id) => (species.find((specie) => specie.id === id)).location),
  };
}

function getFullCoverage() {
  return employees.map((employee) => {
    const animals = getAnimalsInfo(employee);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: animals.names,
      locations: animals.locations,
    };
  });
}

function getEmployeesCoverage(employeeInfo) {
  if (!employeeInfo) return getFullCoverage();
  const info = Object.values(employeeInfo)[0];
  const colaborator = employees.find((employee) => Object.values(employee).includes(info));
  if (!colaborator) throw new Error('Informações inválidas');
  const animals = getAnimalsInfo(colaborator);
  return {
    id: colaborator.id,
    fullName: `${colaborator.firstName} ${colaborator.lastName}`,
    species: animals.names,
    locations: animals.locations,
  };
}

module.exports = getEmployeesCoverage;

// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species, employees } = data;

const defineOldest = (oldest, current) => ((oldest > current.age) ? oldest : current.age);

function getOldestFromFirstSpecies(id) {
  const collaborator = employees.find((employee) => employee.id === id);
  const firstAnimal = collaborator.responsibleFor
    .map((animal) => species
      .find((specie) => specie.id === animal))[0];
  const firstResidents = firstAnimal.residents;
  const firstOldest = firstResidents
    .find((resident) => resident.age === firstResidents
      .reduce(defineOldest, firstResidents[0].age));
  return Object.values(firstOldest);
}

module.exports = getOldestFromFirstSpecies;

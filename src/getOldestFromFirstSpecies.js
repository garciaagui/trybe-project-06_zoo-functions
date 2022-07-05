const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldest = (oldest, current) => ((oldest > current.age) ? oldest : current.age);

function getOldestFromFirstSpecies(employeeId) {
  const collaborator = employees.find((employee) => employee.id === employeeId);
  const firstAnimals = collaborator.responsibleFor
    .map((animalId) => species
      .find((specie) => specie.id === animalId))[0].residents;
  const oldestAge = firstAnimals.reduce(getOldest, firstAnimals[0].age);
  const oldestAnimal = firstAnimals.find((animal) => animal.age === oldestAge);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;

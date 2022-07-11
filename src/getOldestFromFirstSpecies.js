const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldest = (oldest, current) => ((oldest > current.age) ? oldest : current.age);

function getOldestFromFirstSpecies(employeeId) {
  const collaborator = employees.find(({ id }) => id === employeeId);
  const firstAnimals = collaborator.responsibleFor
    .map((animalId) => species
      .find(({ id }) => id === animalId))[0].residents;
  const oldestAge = firstAnimals.reduce(getOldest, firstAnimals[0].age);
  const oldestAnimal = firstAnimals.find(({ age }) => age === oldestAge);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;

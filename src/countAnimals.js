const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};
    species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });
    return allAnimals;
  }
  const { specie } = animal;
  const { sex } = animal;
  let total = 0;
  species.find((element) => element.name === specie)
    .residents.forEach((resident) => {
      if (resident.sex === sex || sex === undefined) total += 1;
    });
  return total;
}

module.exports = countAnimals;

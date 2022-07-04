const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};
    species.forEach((specie) => { allAnimals[specie.name] = specie.residents.length; });
    return allAnimals;
  }
  const { specie, sex } = animal;
  let animalCounter = 0;
  const selectedAnimal = species.find((element) => element.name === specie);
  if (!selectedAnimal) return 'Animal não encontrado na base de dados';
  selectedAnimal.residents.forEach((resident) => {
    if (resident.sex === sex || sex === undefined) animalCounter += 1;
  });
  return animalCounter;
}

module.exports = countAnimals;

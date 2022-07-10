const data = require('../data/zoo_data');

const { species } = data;

function getAllAnimals() {
  return species.reduce((allAnimals, { name, residents }) => {
    const obj = allAnimals;
    obj[name] = residents.length;
    return allAnimals;
  }, {});
}

function countAnimals(animal) {
  if (!animal) return getAllAnimals();
  const { specie, sex } = animal;
  const selectedAnimal = species.find(({ name }) => name === specie);
  if (!selectedAnimal) return 'Animal não encontrado na base de dados';
  return selectedAnimal.residents.reduce((animalCounter, currentResident) => {
    if (currentResident.sex === sex || !sex) return animalCounter + 1;
    return animalCounter;
  }, 0);
}

module.exports = countAnimals;

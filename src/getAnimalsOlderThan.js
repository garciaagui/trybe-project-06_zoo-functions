const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalInfo = species.find((element) => element.name === animal);
  if (!animalInfo) return 'Animal não encontrado na base de dados';
  const { residents } = animalInfo;
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;

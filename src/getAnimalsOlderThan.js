const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalInfo = species.find(({ name }) => name === animal);
  if (!animalInfo) return 'Animal não encontrado na base de dados';
  return animalInfo.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;

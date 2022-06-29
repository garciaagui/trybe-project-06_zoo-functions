const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalObj = species.find((element) => element.name === animal);
  if (animalObj === undefined) return 'Animal não encontrado na base de dados';
  const { residents } = animalObj;
  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;

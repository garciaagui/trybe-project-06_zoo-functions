const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

function getOnlyAnimalsNames() {
  const animals = {};
  locations.forEach((location) => {
    const animalsByLocation = species.filter((specie) => specie.location === location)
      .map((specie) => specie.name);
    animals[location] = animalsByLocation;
  });
  return animals;
}

function applyModifiers(animalInfo, sortInfo, sexInfo) {
  let animal = animalInfo;
  if (sexInfo) { animal = animal.filter((resident) => resident.sex === sexInfo); }
  animal = animal.map((resident) => resident.name);
  if (sortInfo) { animal = animal.sort(); }
  return animal;
}

function getAllAnimalsInfo(sortInfo, sexInfo) {
  const allAnimals = [];
  locations.forEach((location) => {
    const animalsByLocation = species.filter((specie) => specie.location === location)
      .map((specie) => {
        const animalObject = {};
        const animalInfo = specie.residents.map((resident) => resident);
        animalObject[specie.name] = applyModifiers(animalInfo, sortInfo, sexInfo);
        return animalObject;
      });
    allAnimals.push(animalsByLocation);
  });
  return allAnimals;
}

function getAnimalMap(options) {
  if (options === undefined) return getOnlyAnimalsNames();
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    const animalsInfo = getAllAnimalsInfo(sorted, sex);
    const mainObject = {};
    locations.forEach((location, index) => {
      mainObject[location] = animalsInfo[index];
    });
    return mainObject;
  }
  return getOnlyAnimalsNames();
}

module.exports = getAnimalMap;

const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

function getOnlySpeciesNames() {
  const obj = {};
  locations.forEach((location) => {
    const animals = species.filter((specie) => specie.location === location)
      .map((specie) => specie.name);
    obj[location] = animals;
  });
  return obj;
}

function getAllSpeciesInfo(sortInfo, sexInfo) {
  const array = [];
  locations.forEach((location) => {
    const animals = species.filter((specie) => specie.location === location)
      .map((specie) => {
        const obj = {};
        let info = specie.residents.map((resident) => resident);
        if (sexInfo) info = info.filter((resident) => resident.sex === sexInfo);
        info = info.map((resident) => resident.name);
        if (sortInfo) info.sort();
        obj[specie.name] = info;
        return obj;
      });
    array.push(animals);
  });
  return array;
}

function getAnimalMap(options) {
  if (options === undefined) return getOnlySpeciesNames();
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    const animals = getAllSpeciesInfo(sorted, sex);
    const obj = {};
    locations.forEach((location, index) => {
      obj[location] = animals[index];
    });
    return obj;
  }
  return getOnlySpeciesNames();
}

module.exports = getAnimalMap;

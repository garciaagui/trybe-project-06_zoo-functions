const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

function getOnlyAnimalsNames() {
  return locations.reduce((animalsObj, currentLocation) => {
    const auxiliarObj = animalsObj;
    const animalsByLocation = species.filter(({ location }) => location === currentLocation)
      .map(({ name }) => name);
    auxiliarObj[currentLocation] = animalsByLocation;
    return animalsObj;
  }, {});
}

function applyModifiers(animalInfo, sortInfo, sexInfo) {
  let animal = animalInfo;
  if (sexInfo) { animal = animal.filter(({ sex }) => sex === sexInfo); }
  if (sortInfo) { animal = animal.sort((a, b) => (a.name > b.name ? 1 : -1)); }
  return animal.map(({ name }) => name);
}

function getAllAnimalsInfo(sortInfo, sexInfo) {
  return locations.reduce((animalsArr, currentLocation) => {
    const animalsByLocation = species.filter(({ location }) => location === currentLocation)
      .map((specie) => {
        const animalObject = {};
        const animalInfo = specie.residents.map((resident) => resident);
        animalObject[specie.name] = applyModifiers(animalInfo, sortInfo, sexInfo);
        return animalObject;
      });
    animalsArr.push(animalsByLocation);
    return animalsArr;
  }, []);
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

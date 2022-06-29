const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((element) => element.id === id));
}

module.exports = getSpeciesByIds;

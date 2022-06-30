const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach((entrant) => {
    const { age } = entrant;
    if (age < 18) child += 1;
    if (age >= 18 && age < 50) adult += 1;
    if (age >= 50) senior += 1;
  });

  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const { child, adult, senior } = visitors;
  const childEntries = child * prices.child;
  const adultEntries = adult * prices.adult;
  const seniorEntries = senior * prices.senior;
  return childEntries + adultEntries + seniorEntries;
}

module.exports = { calculateEntry, countEntrants };

const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach(({ age }) => {
    if (age < 18) child += 1;
    else if (age >= 18 && age < 50) adult += 1;
    else senior += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const visitors = countEntrants(entrants);
  const { child, adult, senior } = visitors;
  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };

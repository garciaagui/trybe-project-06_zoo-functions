const data = require('../data/zoo_data');

const { hours, species } = data;
const animalsList = species.map((specie) => specie.name);
const daysList = Object.keys(hours);

function getDaySchedule(weekDay) {
  if (weekDay === 'Monday') {
    const officeHour = 'CLOSED';
    const exhibition = 'The zoo will be closed!';
    return { officeHour, exhibition };
  }
  const officeHour = `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`;
  const exhibition = species
    .filter((specie) => specie.availability.includes(weekDay))
    .map((specie) => specie.name);
  return { officeHour, exhibition };
}

function getSchedule(scheduleTarget) {
  const schedule = {};
  if (animalsList.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (daysList.includes(scheduleTarget)) {
    schedule[scheduleTarget] = getDaySchedule(scheduleTarget);
    return schedule;
  }
  daysList.forEach((day) => { schedule[day] = getDaySchedule(day); });
  return schedule;
}

module.exports = getSchedule;

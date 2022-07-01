const data = require('../data/zoo_data');

const { hours, species } = data;
const animalsList = species.map((specie) => specie.name);
const daysList = Object.keys(hours);

function generateDaySchedule(day) {
  if (day === 'Monday') {
    const officeHour = 'CLOSED';
    const exhibition = 'The zoo will be closed!';
    return { officeHour, exhibition };
  }
  const officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  const exhibition = species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
  return { officeHour, exhibition };
}

function getSchedule(scheduleTarget) {
  const schedule = {};
  if (animalsList.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (daysList.includes(scheduleTarget)) {
    schedule[scheduleTarget] = generateDaySchedule(scheduleTarget);
    return schedule;
  }
  daysList.forEach((day) => {
    schedule[day] = generateDaySchedule(day);
  });
  return schedule;
}

module.exports = getSchedule;

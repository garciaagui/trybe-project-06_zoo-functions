const data = require('../data/zoo_data');

const { hours, species } = data;
const animalsList = species.map(({ name }) => name);
const daysList = Object.keys(hours);

function getDaySchedule(weekDay) {
  if (weekDay === 'Monday') {
    const officeHour = 'CLOSED';
    const exhibition = 'The zoo will be closed!';
    return { officeHour, exhibition };
  }
  const officeHour = `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`;
  const exhibition = species.reduce((animalsAvailable, { name, availability }) => {
    if (availability.includes(weekDay)) animalsAvailable.push(name);
    return animalsAvailable;
  }, []);
  return { officeHour, exhibition };
}

function getSchedule(scheduleTarget) {
  const schedule = {};
  if (animalsList.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (daysList.includes(scheduleTarget)) {
    schedule[scheduleTarget] = getDaySchedule(scheduleTarget);
    return schedule;
  }
  daysList.forEach((day) => { schedule[day] = getDaySchedule(day); });
  return schedule;
}

module.exports = getSchedule;

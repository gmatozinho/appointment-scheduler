const generate_slots = (be_available) => {
  const available_slots = be_available.flatMap((day_availability) => {
    return generate_day_slot({ ...day_availability });
  });

  return available_slots;
};

const generate_day_slot = ({ day, start, end }) => {
  const day_slots = [];
  let index = start;
  while (index < end) {
    const slot1 = {
      day_of_week: day,
      starts: `${index}:00`,
      ends: `${index}:30`,
      open: true,
    };

    day_slots.push(slot1);

    if (index < end - 1) {
      const slot2 = {
        day_of_week: day,
        starts: `${index}:30`,
        ends: `${index + 1}:00`,
        open: true,
      };

      day_slots.push(slot2);
    }

    index++;
  }

  return day_slots;
};

module.exports = {
  generate_slots,
};

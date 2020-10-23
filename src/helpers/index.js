export const roundNumber = number => Math.round(number);
export const returnZeroBefore = hour => (hour < 10 ? `0${hour}` : hour);

export const dayOfMonth = date => date.getDate();
export const dayName = date =>
  date.toLocaleString('en-us', { weekday: 'long' });

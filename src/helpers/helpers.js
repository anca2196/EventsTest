export const getEventDate = (date) => {
  if (date) {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    const dayOptions = { month: 'long', day: 'numeric' };
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    return `${date.toLocaleDateString('en-US', dayOptions)} | ${
      date.toLocaleDateString('en-US', timeOptions).split(',')[1]
    }`;
  }
  return '';
};

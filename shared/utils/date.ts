export function addDays(date: Date, days: number) {
  const dateCopy = new Date(date);
  const currentDay = date.getDate();
  dateCopy.setDate(currentDay + days);

  return dateCopy;
}

export function isDateHasCurrentMonth(date: Date, currentMonth: number) {
  return date.getMonth() == currentMonth;
}

export function createNextDayInCurrentMonth(date: Date) {
  const nextDayCount = 1;
  const nextDate = addDays(date, nextDayCount);
  const isCurrentMonth = isDateHasCurrentMonth(nextDate, date.getMonth());

  if (!isCurrentMonth) return null;

  return nextDate;
}

export function generateDatesInCurrentMonth(currentDate: Date) {
  const monthLengthList = [31, 30, 29, 28];

  const lastDate = monthLengthList.find((monthLength) => {
    const daysBeforeLastDay = monthLength - currentDate.getDate();
    const lastDayDate = addDays(currentDate, daysBeforeLastDay);

    return isDateHasCurrentMonth(lastDayDate, currentDate.getMonth());
  });

  if (!lastDate) {
    throw new Error('Something went wrong. Could not find the last day in the month');
  }

  const daysLeftInCurrentMonth = lastDate - currentDate.getDate();
  const datesRange = new Array(daysLeftInCurrentMonth)
    .fill(null)
    .map((_, index) => addDays(currentDate, index + 1));

  return datesRange;
}

export function formatDate(date: Date) {
  const dayCount = date.getDate();
  const monthCount = date.getMonth() + 1;

  const twoDigitCount = 10;
  const dayValue = dayCount < twoDigitCount ? `0${dayCount}` : dayCount;
  const monthValue = monthCount < twoDigitCount ? `0${monthCount}` : monthCount;

  return `${dayValue}/${monthValue}`;
}

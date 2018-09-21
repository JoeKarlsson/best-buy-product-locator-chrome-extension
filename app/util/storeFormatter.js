export const getNearestStore = stores => stores.filter(store => store.storeType === 'Big Box').sort((a, b) => a.distance - b.distance)[0];

export const addLeadingZero = num => (parseInt(num) < 10 ? `0${num}` : num); // eslint-disable-line

export const formatDate = (year, month, date) => `${year}-${addLeadingZero(month)}-${addLeadingZero(date)}`;

export const formatAmPmTime = (date) => {
  const hour = parseInt(date.split(':')[0]); // eslint-disable-line
  const min = date.split(':')[1];

  if (hour > 12) {
    return `${hour - 12}:${min} pm`;
  }

  if (hour === 12) {
    return `${hour}:${min} pm`;
  }

  return `${date} am`;
};

export const formatStoreHours = (detailedHours) => {
  const date = new Date();

  const todayFormatted = formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const tomorrowFormatted = formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate() + 1);

  const today = detailedHours.find(
    detail => new Date(detail.date).getTime() === new Date(todayFormatted).getTime(),
  );

  let openNow = false;
  let closingSoon = false;

  if (today) {
    today.day = 'Today';
    today.openAmPm = formatAmPmTime(today.open);
    today.closeAmPm = formatAmPmTime(today.close);

    // eslint-disable-next-line
    if (date.getHours() < parseInt(today.close.split(':'))) {
      openNow = true;

      // eslint-disable-next-line
      if (parseInt(today.close.split(':')) - date.getHours() <= 3) {
        closingSoon = true;
      }
    }
  }

  const tomorrow = detailedHours.find(
    detail => new Date(detail.date).getTime() === new Date(tomorrowFormatted).getTime(),
  );

  if (tomorrow) {
    tomorrow.day = 'Tomorrow';
    tomorrow.openAmPm = formatAmPmTime(tomorrow.open);
    tomorrow.closeAmPm = formatAmPmTime(tomorrow.close);
  }

  const hours = {
    today,
    tomorrow,
    openNow,
    closingSoon,
  };

  return hours;
};

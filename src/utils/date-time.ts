export const formatDateSpan = (
  startDate: Date,
  endDate: Date,
  dateGapLabel: string
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.toLocaleDateString('nl-NL', {
    month: 'long',
  });

  const endMonth = end.toLocaleDateString('nl-NL', {
    month: 'long',
  });

  const startDay = start.toLocaleDateString('nl-NL', {
    day: 'numeric',
  });

  const endDay = end.toLocaleDateString('nl-NL', {
    day: 'numeric',
  });

  if (startMonth === endMonth) {
    return `${startDay} ${dateGapLabel} ${endDay} ${startMonth}`;
  }

  return `${startDay} ${startMonth} ${dateGapLabel} ${endDay} ${endMonth}`;
};

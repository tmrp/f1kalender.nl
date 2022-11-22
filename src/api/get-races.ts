export const getRaces = async () => {
  const response = await fetch(
    `${import.meta.env.MONGODB_HTTP_API_URL}/get_races?secret=${
      import.meta.env.MONGODB_HTTP_API_SECRET
    }`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  const allRaces = await response.json();

  const validRaceDates = allRaces[0].raceRounds.filter(
    (element) => element.date.fullStartDate !== 'Invalid Date'
  );

  const upcomingRace = validRaceDates.find((element) => {
    const raceEndTime = element.content.schedule.upcomingEvents
      .slice(-1)[0]
      .events.slice(-1)[0].time.end;

    const raceEndDateAndTime = `${new Date(
      element.date.fullEndDate
    ).toDateString()} ${raceEndTime}`;

    const isToday = new Date().toISOString();

    return new Date(raceEndDateAndTime).toISOString() >= isToday;
  });

  const upcomingRaceNumber = upcomingRace?.raceRoundNumber;

  const restOfRaces = allRaces[0].raceRounds.filter((element) => {
    return parseInt(element.raceRoundNumber) > parseInt(upcomingRaceNumber);
  });

  return { upcomingRace: upcomingRace, restOfRaces: restOfRaces };
};

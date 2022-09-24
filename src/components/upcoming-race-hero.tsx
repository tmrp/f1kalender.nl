import { h, Fragment } from 'preact';

const UpcomingRaceHero = ({ upcomingRace }) => {
  const previewTextBasedOnRaceDate = () => {
    const raceDate = new Date(upcomingRace.date.fullEndDate).getDate();
    const today = new Date().getDate();

    const difference = raceDate - today;

    const objectLiteral = (input) =>
      ({
        [`${input === 0}`]: 'Vandaag',
        [`${input <= 4 && input > 0}`]: 'Dit weekend',
        [`${input <= 7 && input > 4}`]: 'Deze week',
        [`${input > 7}`]: 'Komende race',
      }.true);

    return objectLiteral(difference) || 'Komende race';
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        <h1 className="dark:text-white text-5xl font-semibold">
          F1 Kalender 2022
        </h1>
        <p className="dark:text-white">
          Tijden worden vermeld in Nederlandse tijd 🌷 ⏰ 🇳🇱
        </p>
      </div>
      <hr />
      <div>
        <div>
          <h2 className="dark:text-white text-2xl font-semibold">
            {previewTextBasedOnRaceDate()}:{' '}
            <span className="font-bold">
              🏆 {upcomingRace.event.eventTitle}
            </span>
          </h2>
          <h2 className="dark:text-white text-2xl font-semibold">
            {upcomingRace.event.eventPlace} {upcomingRace.event.flagEmoji}
          </h2>
          {/* <hr /> */}
          <h3 className="dark:text-white text-xl font-bold">
            Ronde: {upcomingRace.raceRoundNumber}
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default UpcomingRaceHero;

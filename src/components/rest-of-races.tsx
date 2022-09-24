import { h, Fragment } from 'preact';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'preact/hooks';
import {
  EVENT_TYPE_BY_DATE,
  EVENT_TYPE_EMOJI,
} from '../constants/event-type-emoji';
import { useWindowWidth } from '../hooks/useWindowWidth';

const RestOfRaces = ({ restOfRaces }) => {
  const [toggleSchema, setToggleSchema] = useState(undefined);

  const windowWidth = useWindowWidth();

  const handleSchemaClick = useCallback(
    (event: any) => {
      event.preventDefault();

      setToggleSchema(
        event.target.value === toggleSchema ? undefined : event.target.value
      );
    },
    [toggleSchema]
  );

  return (
    <section>
      <div className="max-w-4xl m-auto p-5 flex flex-col gap-5">
        <div>
          <h2 className="dark:text-white text-3xl font-semibold">
            Komende races:
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {restOfRaces.map((race, restOfRaceIndex) => (
            <Fragment key={`rest-of-races-${restOfRaceIndex}`}>
              <article className="flex flex-col gap-2">
                <div className="bg-gray-200 flex flex-col justify-between overflow-hidden rounded-md dark:bg-gray-800">
                  <div className="flex flex-row p-2 gap-2 bg-blue-200 text-center font-semibold dark:bg-blue-700 dark:text-white">
                    🗓
                    <span>{race.date.startDate}</span>-
                    <span>{race.date.endDate}</span>
                    <span>{race.date.month}</span>
                  </div>
                  <div className="p-2">
                    <h3 className="dark:text-white text-xl font-semibold">
                      <span className="font-semibold mr-2">🏎</span>
                      <span className="font-semibold">
                        {race.event.eventTitle}
                      </span>
                    </h3>
                    <h3 className="dark:text-white text-xl font-semibold">
                      {race.event.eventPlace} {race.event.flagEmoji}
                    </h3>

                    <h4 className="dark:text-white text-xl font-semibold">
                      Ronde: {race.raceRoundNumber}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2 p-2 xs:flex-row items-start">
                    {race.content.schedule.upcomingEvents.some(
                      (element) => element.dayNumber === 'TBC'
                    ) && (
                      <span className="flex">
                        <span className="text-orange-600 font-semibold">
                          <span>⚠️</span>
                          volledig schema nog niet bekend
                          <span>⚠️</span>
                        </span>
                      </span>
                    )}

                    <button
                      className="bg-blue-900 p-1 rounded-md text-white"
                      onClick={handleSchemaClick}
                      value={race.raceRoundNumber}
                    >
                      <span className="pointer-events-none flex flex-row gap-2 align-baselin justify-between">
                        <span>
                          <span>⚙️ </span>
                          <span className="">schema</span>
                        </span>
                        {toggleSchema === race.raceRoundNumber ? (
                          <ChevronDownIcon
                            className="h-6 w-6 text-white pointer-events-none"
                            aria-hidden="true"
                          />
                        ) : (
                          <ChevronRightIcon
                            className="h-6 w-6 text-white pointer-events-none"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </button>
                  </div>
                </div>

                {toggleSchema &&
                  toggleSchema === race.raceRoundNumber &&
                  race.content.schedule.upcomingEvents
                    .filter((element) => element.dayNumber !== 'TBC')
                    .map((date, toggleIndex) => (
                      <div
                        key={`schema-${toggleIndex}`}
                        className="flex flex-col dark:text-white rounded-lg overflow-hidden"
                      >
                        <div className="bg-red-500 dark:bg-red-900 flex flex-row justify-between">
                          <h3 className="text-lg font-semibold p-2">
                            {date.day} {date.dayNumber} {date.month}
                          </h3>
                          <span className="dark:bg-gray-800 bg-white m-2 rounded-lg">
                            <span className="text-xl font-bold p-2">
                              {EVENT_TYPE_BY_DATE[date.day]}
                            </span>
                          </span>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-800 flex flex-col">
                          <div className="p-2">
                            {date.events.map((event, toggleDateIndex) => (
                              <div
                                key={`toggle-dates-${toggleDateIndex}`}
                                className={`flex flex-row justify-between ${
                                  windowWidth.smDown && 'mb-5'
                                }`}
                              >
                                <span className="text-md font-semibold">
                                  {event.title}
                                </span>
                                <span className="flex flex-row gap-2">
                                  <span className="text-md font-semibold">
                                    {EVENT_TYPE_EMOJI[event.title]}
                                  </span>
                                  <span className="text-ms font-semibold">
                                    {event.time.start}-{event.time.end}
                                  </span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestOfRaces;

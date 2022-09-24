import { h } from 'preact';

import {
  EVENT_TYPE_BY_DATE,
  EVENT_TYPE_EMOJI,
} from '../constants/event-type-emoji';

import { useWindowWidth } from '../hooks/useWindowWidth';

const UpcomingRace = ({ upcomingRace }) => {
  const windowWidth = useWindowWidth();

  return windowWidth.smUp ? (
    <table className="border-collapse table-auto w-full bg-gray-200 dark:bg-gray-800 p-5 rounded-lg dark:text-white overflow-hidden ">
      <thead className="bg-red-500 dark:bg-red-800">
        <tr className="text-left sm:table-row">
          <th className="p-2"></th>
          <th className="p-2">Dag</th>
          <th className="p-2"></th>
          <th className="p-2">Evenement</th>
          <th className="p-2">Tijd</th>
        </tr>
      </thead>
      <tbody className="flex-1 sm:flex-none">
        {upcomingRace.content.schedule.upcomingEventsAsList.map(
          (race, index) => (
            <tr key={`upcoming-race-tr-${index}`} className={`text-lg`}>
              <td className="dark:text-white p-2 w-min">
                {EVENT_TYPE_EMOJI[race.title]}
              </td>
              <td className="dark:text-white p-2">{race.date.day}</td>
              <td className="dark:text-white p-2">
                {race.date.dayNumber} {race.date.month}
              </td>
              <td className="dark:text-white p-2">{race.title}</td>
              <td className="dark:text-white p-2">
                {race.time.start}-{race.time.end}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  ) : (
    <div key="race-list" className="flex flex-col gap-5">
      {upcomingRace.content.schedule.upcomingEvents.map((date, dateIndex) => (
        <article
          key={`upcoming-race-${dateIndex}`}
          className="flex flex-col dark:text-white rounded-lg overflow-hidden"
        >
          <div className="bg-red-500 dark:bg-red-800 flex flex-row justify-between">
            <h3 className="text-xl font-bold p-2">
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
              {date.events.map((event, eventIndex) => (
                <div
                  key={`upcoming-race-schedule-${eventIndex}`}
                  className={`flex flex-row justify-between ${
                    windowWidth.smDown && 'mb-5'
                  }`}
                >
                  <span className="text-lg font-bold">{event.title}</span>
                  <span className="flex flex-row gap-2">
                    <span className="text-lg font-bold">
                      {EVENT_TYPE_EMOJI[event.title]}
                    </span>
                    <span className="text-lg font-bold">
                      {event.time.start}-{event.time.end}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default UpcomingRace;

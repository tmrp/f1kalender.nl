import { h } from 'preact';

import {
  EVENT_TYPE_BY_DATE,
  EVENT_TYPE_EMOJI,
} from '../constants/event-type-emoji';

import { useToggleState } from '../state/useToggleState';

const RaceDetails = ({ race }) => {
  const { toggleState } = useToggleState();

  return (
    <div className="flex flex-col gap-2">
      {toggleState &&
        toggleState === race.raceRoundNumber &&
        race.content.schedule.upcomingEvents.map((date) => (
          <div className="flex flex-col dark:text-white rounded-lg overflow-hidden">
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
                {date.events.map((event) => (
                  <div className={`flex flex-row justify-between`}>
                    <span className="text-md font-semibold">{event.title}</span>
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
    </div>
  );
};

export default RaceDetails;

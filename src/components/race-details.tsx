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
          <div className="flex flex-col overflow-hidden rounded-lg dark:text-white">
            <div className="flex flex-row justify-between bg-red-500 dark:bg-red-900">
              <h3 className="p-2 text-lg font-semibold">
                {date.day} {date.dayNumber} {date.month}
              </h3>
              <span className="m-2 rounded-lg bg-white dark:bg-gray-800">
                <span className="p-2 text-xl font-bold">
                  {EVENT_TYPE_BY_DATE[date.day]}
                </span>
              </span>
            </div>
            <div className="flex flex-col bg-gray-200 dark:bg-gray-800">
              <div className="p-2">
                {date.events.map((event) => (
                  <div className={`flex flex-row justify-between`}>
                    <span className="text-md font-semibold">{event.title}</span>
                    <span className="flex flex-row gap-2">
                      <span className="text-md font-semibold">
                        {EVENT_TYPE_EMOJI[event.title]}
                      </span>
                      <span className="text-ms font-semibold">
                        {event.time.start && event.time.end
                          ? `${event.time.start}-${event.time.end}`
                          : event.time.start}
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

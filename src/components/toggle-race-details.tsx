import { h, Fragment } from 'preact';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'preact/hooks';
import {
  EVENT_TYPE_BY_DATE,
  EVENT_TYPE_EMOJI,
} from '../constants/event-type-emoji';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { useToggleRaceDetails } from '../store/useThemeStore';

const ToggleRaceDetails = ({ race }) => {
  const { toggleSchema, handleSchemaClick: schemaClick } =
    useToggleRaceDetails();

  const handleSchemaClick = useCallback(
    (event: any) => {
      event.preventDefault();

      schemaClick(event);
    },
    [toggleSchema]
  );

  console.log('toglllle', toggleSchema);
  return (
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
  );
};

export default ToggleRaceDetails;

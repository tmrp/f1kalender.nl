import { h } from 'preact';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useCallback } from 'preact/hooks';

import { useToggleState } from '../state/useToggleState';

const ToggleRaceDetails = ({ race }) => {
  const { toggleState, setToggleState } = useToggleState();

  const handleSchemaClick = useCallback(
    (event) => {
      event.preventDefault();

      setToggleState(
        event.target.value === toggleState
          ? false
          : (event.target.value as boolean)
      );
    },
    [toggleState]
  );

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
        {toggleState === race.raceRoundNumber ? (
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

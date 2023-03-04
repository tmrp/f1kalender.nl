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
      className="rounded-md bg-blue-900 p-1 text-white"
      onClick={handleSchemaClick}
      value={race.raceRoundNumber}
    >
      <span className="align-baselin pointer-events-none flex flex-row justify-between gap-2">
        <span>
          <span>⚙️ </span>
          <span className="">schema</span>
        </span>
        {toggleState === race.raceRoundNumber ? (
          <ChevronDownIcon
            className="pointer-events-none h-6 w-6 text-white"
            aria-hidden="true"
          />
        ) : (
          <ChevronRightIcon
            className="pointer-events-none h-6 w-6 text-white"
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  );
};

export default ToggleRaceDetails;

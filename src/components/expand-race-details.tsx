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
};

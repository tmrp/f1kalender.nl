import { atom } from 'nanostores';

import { persistentAtom } from '@nanostores/persistent';

export const themeToggle = persistentAtom('theme', 'dark', {
  encode: JSON.stringify,
  decode: JSON.parse,
});

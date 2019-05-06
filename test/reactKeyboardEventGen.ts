import { KeyboardEvent as ReactKeyboardEvent } from 'react'; // eslint-disable-line import/no-unresolved, no-unused-vars

interface ReactKeyboardEventGenPartial {
  key?: string;
}

// noinspection TypeScriptValidateTypes
export const reactKeyboardEventGen = (initPartial: Partial<KeyboardEventInit> = {}): ReactKeyboardEvent =>
  // @ts-ignore: TODO: fix eslint
  new KeyboardEvent('keypress', initPartial); // eslint-disable-line no-undef

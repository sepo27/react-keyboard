import { KeyboardEvent } from 'react'; // eslint-disable-line no-unused-vars, import/no-unresolved
import { keyboard } from '../src/keyboard';

export const assertKeyboardHandlerCalled = (combination: string, event: KeyboardEvent, expected: boolean) => {
  const handler = jest.fn();

  keyboard(combination, handler)(event);

  if (expected === true) {
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toBeCalledWith(event);
  } else {
    expect(handler).not.toBeCalled();
  }
};

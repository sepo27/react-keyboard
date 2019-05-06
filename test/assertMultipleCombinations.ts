import { KeyboardEvent } from 'react'; // eslint-disable-line import/no-unresolved, no-unused-vars
import { keyboard } from '../src/keyboard';

export const assertMultipleCombinations = (expectedCombinations: { [K: string]: boolean }, event: KeyboardEvent) => {
  Object.keys(expectedCombinations).forEach(c => {
    const
      handlers = Object.keys(expectedCombinations).reduce((acc, cc) => ({ ...acc, [cc]: jest.fn() }), {}),
      rules = Object.keys(expectedCombinations).reduce((acc, cc) => ({ ...acc, [cc]: handlers[cc] }), {}),
      keyboardHandler = keyboard(rules),
      expected = expectedCombinations[c];

    // $FlowFixMe: events mismatch
    keyboardHandler(event);

    if (expected === true) {
      expect(handlers[c]).toHaveBeenCalledTimes(1);
      expect(handlers[c]).toBeCalledWith(event);
      Object.keys(handlers).forEach(cc => {
        if (cc === c) return;
        expect(handlers[cc]).not.toBeCalled();
      });
    } else {
      expect(handlers[c]).not.toBeCalled();
    }
  });
};

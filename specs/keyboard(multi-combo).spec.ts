import { reactKeyboardEventGen } from '../test/reactKeyboardEventGen';
import { assertMultipleCombinations } from '../test/assertMultipleCombinations';
import { Key } from '../src/Key';
import { combo } from '../src/combo';

describe('keyboard', () => {
  it('matches: b AND NOT shift+b', () => {
    assertMultipleCombinations(
      {
        b: true,
        'shift+b': false,
      },
      reactKeyboardEventGen({
        key: 'b',
      }),
    );
  });

  it('matches: Enter+shift AND NOT Enter', () => {
    assertMultipleCombinations(
      {
        [Key.ENTER]: false,
        [combo(Key.ENTER, Key.SHIFT)]: true,
      },
      reactKeyboardEventGen({
        key: Key.ENTER,
        shiftKey: true,
      }),
    );
  });

  it('matches: exactly ctrl+shift+a', () => {
    assertMultipleCombinations(
      {
        'ctrl+a': false,
        'ctrl+a+shift': true,
        'shift+a': false,
      },
      reactKeyboardEventGen({
        key: 'a',
        shiftKey: true,
        ctrlKey: true,
      }),
    );
  });
});

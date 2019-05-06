import { KeyboardCombination } from '../src/KeyboardCombination';
import { ReactKeyboardError } from '../src/ReactKeyboardError';

describe('KeyboardCombination', () => {
  it('parses single key', () => {
    const combo = new KeyboardCombination('a');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(false);
    expect(combo.shift).toBe(false);
  });

  it('parses ctrl+key', () => {
    const combo = new KeyboardCombination('ctrl+a');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(false);
  });

  it('parses key+ctrl', () => {
    const combo = new KeyboardCombination('a+ctrl');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(false);
  });

  it('parses key+shift', () => {
    const combo = new KeyboardCombination('a+shift');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(false);
    expect(combo.shift).toBe(true);
  });

  it('parses shift+key', () => {
    const combo = new KeyboardCombination('shift+a');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(false);
    expect(combo.shift).toBe(true);
  });

  it('parses key+ctrl+shift', () => {
    const combo = new KeyboardCombination('a+ctrl+shift');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(true);
  });

  it('parses key+shift+ctrl', () => {
    const combo = new KeyboardCombination('a+shift+ctrl');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(true);
  });

  it('parses shift+key+ctrl', () => {
    const combo = new KeyboardCombination('shift+a+ctrl');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(true);
  });

  it('parses shift+ctrl+key', () => {
    const combo = new KeyboardCombination('shift+ctrl+a');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(true);
  });

  it('parses ctrl+key+shift', () => {
    const combo = new KeyboardCombination('ctrl+a+shift');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(true);
  });

  it('parses ctrl+shift+key', () => {
    const combo = new KeyboardCombination('ctrl+shift+a');

    expect(combo.key).toBe('a');
    expect(combo.ctrl).toBe(true);
    expect(combo.shift).toBe(true);
  });

  it('errors out when combination has more than 3 keys', () => {
    expect(() => new KeyboardCombination('ctrl+shift+a+b'))
      .toThrow(new ReactKeyboardError(
        `Invalid keyboard combination given: ctrl+shift+a+b.
        Expecting a most 3 keys, two of which should be: ctrl or shift.`,
      ));
  });

  it('errors out when combination is invalid', () => {
    expect(() => new KeyboardCombination('ctrl+a+b'))
      .toThrow(new ReactKeyboardError(
        `Invalid keyboard combination given: ctrl+a+b.
        Expecting a most 3 keys, two of which should be: ctrl or shift.`,
      ));
  });
});

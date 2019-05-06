import { Key } from '../src/Key';
import { combo } from '../src/combo';

describe('combo', () => {
  it('single key', () => {
    expect(combo(Key.ENTER)).toBe('Enter');
  });

  it('two keys', () => {
    expect(combo(Key.ENTER, Key.CTRL)).toBe('Enter+ctrl');
  });

  it('tree keys', () => {
    expect(combo(Key.ENTER, Key.CTRL, Key.SHIFT)).toBe('Enter+ctrl+shift');
  });
});

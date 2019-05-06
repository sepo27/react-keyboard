import { ReactKeyboardCombinationError } from './ReactKeyboardError';

export class KeyboardCombination {
  readonly key: string;
  readonly ctrl: boolean = false;
  readonly shift: boolean = false;

  constructor(combination: string) {
    const parts = combination.split('+');

    if (parts.length > 3) {
      throw new ReactKeyboardCombinationError(combination);
    }

    const resolveKey = name => {
      let result = false;
      const i = parts.findIndex(p => p === name);
      if (i !== -1) {
        result = true;
        parts.splice(i, 1);
      }
      return result;
    };

    this.ctrl = resolveKey('ctrl');
    this.shift = resolveKey('shift');

    if (parts.length !== 1) {
      throw new ReactKeyboardCombinationError(combination);
    }

    this.key = parts.shift();
  }
}

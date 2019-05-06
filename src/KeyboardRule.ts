import { KeyboardEvent, KeyboardEventHandler } from 'react'; //eslint-disable-line import/no-unresolved, no-unused-vars
import { KeyboardCombination } from './KeyboardCombination';

export class KeyboardRule {
  readonly combination: KeyboardCombination;
  readonly handler: KeyboardEventHandler;

  constructor(combination: string, handler: KeyboardEventHandler) {
    this.combination = new KeyboardCombination(combination);
    this.handler = handler;
  }

  match(e: KeyboardEvent): boolean {
    return e.key === this.combination.key
      && e.ctrlKey === this.combination.ctrl
      && e.shiftKey === this.combination.shift;
  }
}

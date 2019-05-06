import { KeyboardEventHandler } from 'react'; //eslint-disable-line import/no-unresolved, no-unused-vars
import { KeyboardRule } from './KeyboardRule';

export type Params = [string, KeyboardEventHandler] | [{ [K: string]: KeyboardEventHandler }];

export const keyboard = (...args: Params): KeyboardEventHandler => {
  let rules: KeyboardRule[];

  if (args.length === 1) {
    rules = Object.keys(args[0]).map(k => new KeyboardRule(k, args[0][k]));
  } else {
    rules = [new KeyboardRule(args[0], args[1])];
  }

  return e => {
    for (let i = 0; i < rules.length; i++) {
      const aRule = rules[i];

      if (aRule.match(e)) {
        aRule.handler(e);
        return;
      }
    }
  };
};

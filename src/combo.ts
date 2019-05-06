import { Key } from './Key'; // eslint-disable-line no-unused-vars

type Params = [Key] | [Key, Key] | [Key, Key, Key];

export const combo = (...args: Params): string => args.join('+');

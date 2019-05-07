const sanitizeMessage = message => message
  .trim()
  .replace(/\n\s+/g, '\n');

export class ReactKeyboardError extends Error {
  constructor(message) {
    super(sanitizeMessage(message));
    this.name = this.constructor.name;
    // @ts-ignore
    if (typeof Error.captureStackTrace === 'function') {
      // @ts-ignore
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

export class ReactKeyboardCombinationError extends ReactKeyboardError {
  constructor(combination: string) {
    super(
      `Invalid keyboard combination given: ${combination}.
      Expecting a most 3 keys, two of which should be: ctrl or shift.`,
    );
  }
}

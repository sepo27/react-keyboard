import { assertKeyboardHandlerCalled } from '../test/assertKeyboardHandlerCalled';
import { reactKeyboardEventGen } from '../test/reactKeyboardEventGen';

describe('keyboard', () => {
  it('matches: a', () => {
    const
      combination = 'a',
      event = reactKeyboardEventGen({
        key: 'a',
      });

    assertKeyboardHandlerCalled(combination, event, true);
  });

  it('does not match: b', () => {
    const
      combination = 'b',
      event = reactKeyboardEventGen({
        key: 'a',
      });

    assertKeyboardHandlerCalled(combination, event, false);
  });

  it('matches: a+ctrl', () => {
    const
      combination = 'a+ctrl',
      event = reactKeyboardEventGen({
        key: 'a',
        ctrlKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, true);
  });

  it('matches: ctrl+a', () => {
    const
      combination = 'ctrl+a',
      event = reactKeyboardEventGen({
        key: 'a',
        ctrlKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, true);
  });

  it('does not match: ctrl+a', () => {
    const
      combination = 'ctrl+a',
      event = reactKeyboardEventGen({
        key: 'a',
      });

    assertKeyboardHandlerCalled(combination, event, false);
  });

  it('does not match:  ctrl+shift+Enter', () => {
    const
      combination = 'ctrl+shift+Enter',
      event = reactKeyboardEventGen({
        key: 'Enter',
        ctrlKey: true,
        shiftKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, true);
  });

  it('matches:  ctrl+Enter+shift', () => {
    const
      combination = 'ctrl+Enter+shift',
      event = reactKeyboardEventGen({
        key: 'Enter',
        ctrlKey: true,
        shiftKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, true);
  });

  it('does not match: Enter+ctrl+shift', () => {
    const
      combination = 'Enter+ctrl+shift',
      event = reactKeyboardEventGen({
        key: 'Enter',
        ctrlKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, false);
  });

  it('does not match: Enter+ctrl+shift #2', () => {
    const
      combination = 'Enter+ctrl+shift',
      event = reactKeyboardEventGen({
        key: 'Enter',
        shiftKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, false);
  });

  it('does not match: shift+Enter', () => {
    const
      combination = 'shift+Enter',
      event = reactKeyboardEventGen({
        key: 'Enter',
        ctrlKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, false);
  });

  it('does not match: a, when event is: ctrl+a', () => {
    const
      combination = 'a',
      event = reactKeyboardEventGen({
        key: 'a',
        ctrlKey: true,
      });

    assertKeyboardHandlerCalled(combination, event, false);
  });
});

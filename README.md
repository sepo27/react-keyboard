# React keyboard

## Usage
### Single handler
```javascript
import { keyboard, Key } from '@sepo27/react-keyboard';

class MyCom extends React.Component {
  onArrowUp = keyboard(Key.ARROW_UP, () => {
    // go up
  });
  
  render(){
    return (
      <input onKeyDown={this.onArrowUp} />
    );
  }
}
```

### Multi handler
```javascript
import { keyboard, Key, combo } from '@sepo27/react-keyboard';

class MyCom extends React.Component {
  onKeyDown = keyboard({
    [Key.ENTER]: () => {
      // handle Enter key
    },
    [combo(Key.ENTER, Key.CTRL)]: () => {
      // handle Enter+ctrl key
    },
  });
  
  render(){
    return (
      <input onKeyDown={this.onKeyDown} />
    );
  }
}
```

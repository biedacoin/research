import * as React from 'react';
import './Input.css';

export interface Props {
  onEnter: (text: string) => void;
}

export interface State {
}

class Input extends React.Component<Props, State> {
  inputRef: HTMLInputElement | null;

  onKeyPress = (event): void => {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      this.props.onEnter(event.target.value);
      if (this.inputRef !== null) {
        this.inputRef.value = '';
      }
    }
  }

  render() {
    return (
      <div className="Input"><div>
        <input
          type="text"
          spellCheck={false}
          onKeyPress={this.onKeyPress}
          ref={(ref) => { this.inputRef = ref; }}
        />
      </div></div>
    );
  }

}

export default Input;

// vim:ts=2:sw=2:et:syn=typescript:

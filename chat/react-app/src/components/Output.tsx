import * as React from 'react';
import './Output.css';

export interface Props {
  messages: Array<string>;
}

export interface State {
}

class Output extends React.Component<Props, State> {

  render() {
    return (
      <div className="Output">{
        this.props.messages.map((line, key) =>
          <p key={key}>{line}</p>
        )
      }</div>
    );
  }

}

export default Output;

// vim:ts=2:sw=2:et:syn=typescript:

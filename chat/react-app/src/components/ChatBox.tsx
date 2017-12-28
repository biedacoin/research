import * as React from 'react';
import Input from './Input';
import Output from './Output';

export interface Props {
}

export interface State {
  messages: Array<string>;
}

class ChatBox extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  appendMessage = (message: string): void => {
    this.setState((prev) => ({
      ...prev,
      messages: [message, ...prev.messages.slice(0, 1024)],
    }));
  }

  render() {
    return (
      <div>
        <Output messages={this.state.messages} />
        <Input onEnter={this.appendMessage} />
      </div>
    );
  }
}

export default ChatBox;

// vim:ts=2:sw=2:et:syn=typescript:

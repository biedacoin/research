import * as React from 'react';
import { Block, BlockDetails } from './BlockDetails';
import './ListOfBlocks.css';

const Web3 = require('web3');

export interface Props {
  maxLength: number;
}

export interface State {
  blocks: Array<Block>;
}

class ListOfBlocks extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      blocks: Array.from({ length: props.maxLength }, (v, k) =>
        ({ number: 0, hash: '0x' })
      ),
    };
  }

  async componentDidMount() {
    const web3 = new Web3(`ws://${window.location.host}/ec_geth`);

    const blockNumber: number = await web3.eth.getBlockNumber();
    const start = (blockNumber > this.props.maxLength)
                ? (blockNumber - this.props.maxLength)
                : 0;

    for (let k = start; k < blockNumber; k++) {
      let block: Block = await web3.eth.getBlock(k);
      this._cycle(block);
    }

    return web3.eth.subscribe('newBlockHeaders').on('data', (blockHeader: Block) => {
      this._cycle(blockHeader);
    });
  }

  render() {
    return (
      <div className="ListOfBlocks">
        {[...this.state.blocks].sort((a: Block, b: Block) =>
          b.number - a.number  // desc
        ).map((block: Block) =>
          (block.hash === '0x')
            ? null
            : <BlockDetails key={block.number} {...block} />
        )}
      </div>
    );
  }

  private _cycle(newBlock: Block): void {
    this.setState((prev: State) => ({
      ...prev,
      blocks: [...prev.blocks.slice(1), newBlock],
    }));
  }

}

export default ListOfBlocks;

// vim:ts=2:sw=2:et:syn=typescript:

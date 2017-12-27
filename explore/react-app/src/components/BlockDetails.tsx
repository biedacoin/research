import * as React from 'react';
import Collapsible from 'react-collapsible';
import './BlockDetails.css';

export interface Block {
  number: number;
  hash: string;
}

export function BlockDetails(block: Block) {
  if (block.hash == '0x') {
    return (null);
  } else {
    return (
      <Collapsible trigger={block.hash}>
        <pre>{JSON.stringify(block, null, 2)}</pre>
      </Collapsible>
    );
  }
}

export default BlockDetails;

// vim:ts=2:sw=2:et:syn=typescript:
